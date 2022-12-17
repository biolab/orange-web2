import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";


export default function minifyImages(folder: string) {
  imagemin([folder], {
    destination: folder,
    plugins: [
      imageminWebp({
        quality: 85,
      }),
    ],
  });
}
