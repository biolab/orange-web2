import fs from "fs";
import path from "path";

export default function getAllMdFilesInDir(dir: string) {
  function throughDirectory(dir: string) {
    fs.readdirSync(dir).forEach((file) => {
      const absolute = path.join(dir, file);
      if (fs.statSync(absolute).isDirectory()) {
        return throughDirectory(absolute);
      } else if (absolute.endsWith(".md")) {
        files.push(absolute);
      }
    });
  }

  const files: string[] = [];
  throughDirectory(dir);
  return files;
}
