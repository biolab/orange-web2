import path from "path";
import { existsSync } from "fs";

export function getWebpPath(imgSrc) {
  const webpFolder = path.join(path.dirname(imgSrc), "__webp-images__");
  const baseName = path.basename(imgSrc);
  const webpBaseName = baseName.slice(0, baseName.lastIndexOf(".")) + ".webp";
  const webpSrc = path.join(webpFolder, webpBaseName);

  return existsSync(path.join("public", webpSrc)) ? webpSrc : imgSrc;
}
