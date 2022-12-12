import type { VFile } from "vfile";
import { Processor } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";
import probe, { ProbeResult } from "probe-image-size";
import { readFileSync } from "fs";

interface FlowElement {
  name: "mdxJsxFlowElement";
  tagName: string;
  attributes: {
    type: string;
    name: string;
    value: string | number;
  }[];
}

export function rehypeImageSize(this: Processor) {
  function isImageNode(node: any): boolean {
    const img = node as FlowElement;

    return Boolean(
      ["WindowScreenshot", "Figure", "Figure", "WorkflowScreenshot"].includes(img.name) &&
        img.attributes &&
        img.attributes.find((attribute) => (attribute.name = "src"))
    );
  }

  return async function transformer(tree: Node, file: VFile): Promise<Node> {
    const imageNodes: FlowElement[] = [];

    visit(tree, "mdxJsxFlowElement", (node: FlowElement) => {
      if (isImageNode(node)) {
        imageNodes.push(node);
      }
    });

    if (imageNodes.length === 0) {
      return tree;
    }

    imageNodes.forEach((node) => {
      let size: ProbeResult | null = null;

      try {
        const imgSrc = node.attributes.find((attribute) => (attribute.name = "src"))?.value;
        const img = readFileSync(`public${imgSrc}`);
        size = probe.sync(img);
      } catch (e) {
        throw new Error();
      }

      if (size) {
        node.attributes.push(
          { type: "mdxJsxAttribute", name: "width", value: size.width },
          { type: "mdxJsxAttribute", name: "height", value: size.height }
        );
      }
    });

    return tree;
  };
}
