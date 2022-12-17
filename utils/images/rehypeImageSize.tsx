import type { VFile } from "vfile";
import { Processor } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import probe, { ProbeResult } from "probe-image-size";
import { readFileSync, existsSync } from "fs";
import path from "path";
interface FlowElement {
  name: "mdxJsxFlowElement";
  tagName: string;
  attributes: {
    type: string;
    name: string;
    value: string | number;
  }[];
}

interface ImgNode {
  tagName: "img";
  properties: {
    src: string;
    alt: string;
    height?: number;
    width?: number;
  };
}

function getWebpPath(imgSrc: string): string {
  const webpFolder = path.join(path.dirname(imgSrc), "__webp-images__");
  const baseName = path.basename(imgSrc);
  const webpBaseName = baseName.slice(0, baseName.lastIndexOf(".")) + ".webp";
  const webpSrc = path.join(webpFolder, webpBaseName);
  
  return existsSync(path.join("public", webpSrc)) ? webpSrc : imgSrc;
}

export function rehypeImageSize(this: Processor) {
  function isJsxImageNode(node: any): boolean {
    const img = node as FlowElement;

    return Boolean(
      ["WindowScreenshot", "Figure", "Figure", "WorkflowScreenshot"].includes(img.name) &&
        img.attributes &&
        img.attributes.find((attribute) => (attribute.name = "src"))
    );
  }

  function imageNode(node: any): boolean {
    const img = node as ImgNode;
    return Boolean(img.tagName === "img" && img.properties?.src && !img.properties.src.startsWith("http"));
  }

  return async function transformer(tree: Node, file: VFile): Promise<Node> {
    const JsxNodes: FlowElement[] = [];
    const imageNodes: ImgNode[] = [];

    visit(tree, "mdxJsxFlowElement", (node: any) => {
      if (isJsxImageNode(node)) {
        JsxNodes.push(node as FlowElement);
      }
    });

    visit(tree, "element", (node: any) => {
      if (imageNode(node)) {
        imageNodes.push(node as ImgNode);
      }
    });

    imageNodes.forEach(async (node) => {
      let size: ProbeResult | null = null;

      const imgSrc = node.properties.src;

      try {
        const img = readFileSync(`public${imgSrc}`);
        size = probe.sync(img);
      } catch (e) {
        throw new Error();
      }

      if (size) {
        node.properties = {
          ...node.properties,
          width: size.width,
          height: size.height,
          src: getWebpPath(imgSrc),
        };
      }
    });

    JsxNodes.forEach((node) => {
      let size: ProbeResult | null = null;

      const imgSrc = node.attributes.find((attribute) => (attribute.name = "src"))!.value as string;

      try {
        const img = readFileSync(`public${imgSrc}`);
        size = probe.sync(img);
      } catch (e: any) {
        throw new Error(e);
      }

      if (size) {
        node.attributes = node.attributes.filter((attribute) => (attribute.name = "src"));

        node.attributes.push(
          { type: "mdxJsxAttribute", name: "width", value: size.width },
          { type: "mdxJsxAttribute", name: "height", value: size.height },
          { type: "mdxJsxAttribute", name: "src", value: getWebpPath(imgSrc) }
        );
      }
    });

    return tree;
  };
}
