import fs from "fs";
import path from "path";

export default function getAllMdFilesInDir(dir) {
  function throughDirectory(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const absolute = path.join(dir, file);
      if (fs.statSync(absolute).isDirectory()) {
        return throughDirectory(absolute);
      } else if (absolute.endsWith(".md")) {
        files.push(absolute);
      }
    });
  }

  const files = [];
  throughDirectory(dir);
  return files;
}
