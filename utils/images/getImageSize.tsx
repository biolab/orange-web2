import { readFileSync } from "fs";
import probe, { ProbeResult } from "probe-image-size";

export interface ImageProps {
  src: string;
  width?: number;
  height?: number;
}

export default function getImageSize(src: string): ImageProps {
  let size: ProbeResult | null = null;
  try {
    const img = readFileSync(`public${src}`);
    size = probe.sync(img);
  } catch (e) {
    throw new Error();
  }

  if (!size) {
    return { src };
  }

  return {
    width: size.width,
    height: size.height,
    src,
  };
}
