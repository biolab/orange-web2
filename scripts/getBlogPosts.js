import fs from "fs";
import path from "path";
import matter from "gray-matter";
import probe from "probe-image-size";
import getAllMdFilesInDir from "../utils/getAllMdFilesInDir";

function getImageSizeAttributes(src) {
  if (!src) {
    return null;
  }

  let size = null;

  try {
    const img = fs.readFileSync(`public${src}`);
    size = probe.sync(img);
  } catch (e) {
    throw new Error();
  }

  if (!size) {
    return null;
  }

  return {
    width: size.width,
    height: size.height,
    src,
  };
}

function getPostsData(files) {
  return files
    .map((postPath) => {
      const fileContents = fs.readFileSync(postPath, "utf8");

      const fileName = path.basename(postPath);
      const oldSlug = fileName.replace(/\.md$/, "");

      const publicFolder = "public";
      const publicFilePath = postPath.slice(postPath.indexOf(publicFolder) + publicFolder.length).replace(fileName, "");

      const {
        data: { title, draft, longExcerpt, shortExcerpt, url, date, x2images, thumbImage },
      } = matter(fileContents);

      const thumbImagePath = thumbImage ? publicFilePath + thumbImage : null;

      return {
        x2images: !!x2images,
        fullFilePath: postPath,
        thumbImage: getImageSizeAttributes(thumbImagePath),
        publicFilePath,
        oldSlug,
        draft: !!draft,
        title: title || "",
        date: date || "",
        longExcerpt: longExcerpt || "",
        shortExcerpt: shortExcerpt || "",
        url: (url || title || oldSlug)
          .replace(/ /g, "-")
          .replace(/[.,\/#!?%\^&\*;:{}=\_`~()]/g, "")
          .toLowerCase(),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogsMetadata() {
  return getPostsData(getAllMdFilesInDir("public/blog"));
}
