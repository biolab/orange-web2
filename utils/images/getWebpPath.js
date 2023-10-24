import path from "path";
import { existsSync } from "fs";

export function getOptimizedImagePath(imgSrc) {
  const optimizedFolder = path.join(
    path.dirname(imgSrc),
    "__optimized-images__"
  );
  const baseName = path.basename(imgSrc);
  const optimizedSrc = path.join(optimizedFolder, baseName);

  return existsSync(path.join("public", optimizedSrc)) ? optimizedSrc : imgSrc;
}
