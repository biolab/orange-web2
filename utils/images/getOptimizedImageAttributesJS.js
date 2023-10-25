import { readFileSync, existsSync } from "fs";
import path from "path";
import probe from "probe-image-size";

function getOptimizedImagePath(imgSrc) {
  const optimizedFolder = path.join(
    path.dirname(imgSrc),
    "__optimized-images__"
  );
  const baseName = path.basename(imgSrc);
  const optimizedSrc = path.join(optimizedFolder, baseName);

  return existsSync(path.join("public", optimizedSrc)) ? optimizedSrc : imgSrc;
}

export default function getOptimizedImageAttributes(src) {
  if (!src) {
    return null;
  }

  const optimizedSrc = getOptimizedImagePath(src);

  let size = null;

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
    src: optimizedSrc,
  };
}
