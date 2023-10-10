import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import fs from "fs";
import { join } from "path";

function getAllFolders(path) {
  function throughDirectory(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const absolute = join(dir, file);
      if (fs.statSync(absolute).isDirectory()) {
        folders.push(absolute);
      }
    });
  }

  let folders = [];
  throughDirectory(path);
  return folders;
}

[
  ...getAllFolders("public/blog"),
  ...getAllFolders("public/widget-catalog").flatMap((path) => getAllFolders(path)),
  "public/widget-catalog/widget-icons",
].forEach((path) => {
  imagemin([join(path, "*.{jpg,png}")], {
    destination: join(path, "__webp-images__"),
    plugins: [
      imageminWebp({
        quality: 85,
      }),
    ],
  })
    .then((images) => {
      if (images.length > 0) {
        console.log(`Images converted successfully in folder ${path}`);
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
