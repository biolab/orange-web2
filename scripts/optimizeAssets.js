import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import { join } from "path";

const path = join("public", "assets");

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
