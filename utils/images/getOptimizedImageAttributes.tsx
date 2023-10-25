import getOptimizedImageAttributesJS from "./getOptimizedImageAttributesJS";

export interface ImageProps {
  src: string;
  width: number;
  height: number;
}

export default function getOptimizedImageAttributes(
  src: string
): ImageProps | null {
  return getOptimizedImageAttributesJS(src) as ImageProps | null;
}
