import fs from "fs";
import path from "path";
import matter from "gray-matter";
import probe from "probe-image-size";
import getAllMdFilesInDir from "../utils/getAllMdFilesInDir";
import { getWebpPath } from "../utils/images/getWebpPath";
import getPublicFilePath from "../utils/getPublicFilePath";
import slugify from "@utils/slugify";

function getImageSizeAttributes(src) {
  if (!src) {
    return null;
  }

  let size = null;

  const webpSrc = getWebpPath(src);

  try {
    const img = fs.readFileSync(`public${webpSrc}`);
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
    src: webpSrc,
  };
}

function getPostsData(files) {
  return files
    .map((postPath) => {
      const fileContents = fs.readFileSync(postPath, "utf8");

      const fileName = path.basename(postPath);
      const oldSlug = fileName.replace(/\.md$/, "");

      const {
        data: { title, draft, longExcerpt, shortExcerpt, url, date, author, x2images, thumbImage, blog },
      } = matter(fileContents);

      const publicFilePath = getPublicFilePath(postPath);
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
        tags: blog || [],
        author: author || "",
        longExcerpt: longExcerpt || "",
        shortExcerpt: shortExcerpt || "",
        url: slugify(url || title || oldSlug),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogsMetadata() {
  return getPostsData(getAllMdFilesInDir("public/blog"));
}
