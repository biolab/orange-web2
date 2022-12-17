import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import fs from "fs";
import { join } from "path";

function getAllBlogFolders() {
  function throughDirectory(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const absolute = join(dir, file);
      if (fs.statSync(absolute).isDirectory()) {
        folders.push(absolute);
      }
    });
  }

  let folders = [];
  throughDirectory("public/blog");
  return folders;
}

getAllBlogFolders()
  .forEach((path) => {

  imagemin([join(path, "*.{jpg,png}")], {
    destination: join(path, "__webp-images__"),
    plugins: [
      imageminWebp({
        quality: 85,
      }),
    ],
  })
    .then(() => {
      console.log("Images converted");
    })
    .catch((err) => {
      console.error(err);
    });
});
