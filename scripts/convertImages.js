import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import fs from "fs";
import { join } from "path";

function getAllFolders(path) {
  function throughDirectory(dir) {
    fs.readdirSync(dir).forEach((file) => {
      const absolute = join(dir, file);
      if (
        file !== "__optimized-images__" &&
        fs.statSync(absolute).isDirectory()
      ) {
        folders.push(absolute);
      }
    });
  }

  let folders = [];
  throughDirectory(path);
  return folders;
}

const allFolders = [
  ...getAllFolders("public/blog"),
  ...getAllFolders("public/widget-catalog").flatMap((path) =>
    getAllFolders(path)
  ),
  "public/widget-catalog/widget-icons",
];

for (let path of allFolders) {
  await imagemin([join(path, "*.png")], {
    destination: join(path, "__optimized-images__"),
    plugins: [imageminPngquant({ speed: 5 })],
  })
    .then((images) => {
      if (images.length > 0) {
        console.log(`Images converted successfully in folder ${path}`);
      }
    })
    .catch((err) => {
      console.error(err);
    });

  await imagemin([join(path, "*.jpg")], {
    destination: join(path, "__optimized-images__"),
    plugins: [
      imageminMozjpeg({
        quality: 80,
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
}
