import type { VFile } from "vfile";
import { Processor } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import getOptimizedImageAttributes from "./getOptimizedImageAttributes";

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

export function getImageData(this: Processor) {
  function isJsxImageNode(node: any): boolean {
    const img = node as FlowElement;

    return Boolean(
      ["WindowScreenshot", "Figure", "Figure", "WorkflowScreenshot"].includes(
        img.name
      ) &&
        img.attributes &&
        img.attributes.find((attribute) => (attribute.name = "src"))
    );
  }

  function imageNode(node: any): boolean {
    const img = node as ImgNode;
    return Boolean(
      img.tagName === "img" &&
        img.properties?.src &&
        !img.properties.src.startsWith("http")
    );
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

    for (let node of imageNodes) {
      const imageDate = getOptimizedImageAttributes(node.properties.src);

      if (imageDate) {
        node.properties = {
          ...node.properties,
          width: imageDate.width,
          height: imageDate.height,
          src: imageDate.src,
        };
      }
    }

    for (let node of JsxNodes) {
      const imgSrc = node.attributes.find(
        (attribute) => (attribute.name = "src")
      )!.value as string;

      const imageDate = getOptimizedImageAttributes(imgSrc);

      if (imageDate) {
        node.attributes = node.attributes.filter(
          (attribute) => (attribute.name = "src")
        );

        node.attributes.push(
          { type: "mdxJsxAttribute", name: "width", value: imageDate.width },
          { type: "mdxJsxAttribute", name: "height", value: imageDate.height },
          {
            type: "mdxJsxAttribute",
            name: "src",
            value: imageDate.src,
          }
        );
      }
    }

    return tree;
  };
}
