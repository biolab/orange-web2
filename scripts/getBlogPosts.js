const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getAllMdFiles() {
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

  let files = [];
  throughDirectory("public/blog");
  return files;
}

function getPostsData(files) {
  return files
    .map((postPath) => {
      const fileContents = fs.readFileSync(postPath, "utf8");

      const fileName = path.basename(postPath);
      const oldSlug = fileName.replace(/\.md$/, "");

      const pulbicFolder = "public";
      const publicFilePath = postPath.slice(postPath.indexOf(pulbicFolder) + pulbicFolder.length).replace(fileName, "");

      const {
        data: { title, draft, longExcerpt, url, date, x2images, thumbImage },
      } = matter(fileContents);

      const thumbImagePath = thumbImage ? publicFilePath + thumbImage : null;

      return {
        x2images: !!x2images,
        fullFilePath: postPath,
        thumbImage: thumbImagePath,
        publicFilePath,
        oldSlug,
        draft: !!draft,
        title: title || "",
        date: date || "",
        longExcerpt: longExcerpt || "",
        url: (url || title || oldSlug).replaceAll(" ", "-").toLowerCase(),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getBlogsMetadata() {
  return getPostsData(getAllMdFiles());
}

function writeCache() {
  fs.writeFile("blogPosts.json", JSON.stringify(getBlogsMetadata()), function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Posts cached.");
  });
}

writeCache();

module.exports = {
  getBlogsMetadata,
};
