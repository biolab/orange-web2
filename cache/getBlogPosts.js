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
  return files.map((postPath) => {
    const fileContents = fs.readFileSync(postPath, "utf8");
    const [fileName] = /[^/]*$/.exec(postPath);
    const oldSlug = fileName.replace(/\.md$/, "");
    const publicFilePath = postPath.split("public/")[1].replace(fileName, "");

    const {
      data: { title, draft, longExcerpt, url, date },
    } = matter(fileContents);
    console.log(title);
    return {
      fullFilePath: postPath,
      publicFilePath,
      oldSlug,
      draft,
      title,
      date,
      longExcerpt,
      url: (url || title).replaceAll(" ", "-").toLowerCase(),
    };
  });
}

function getBlogsMetadata() {
  return getPostsData(getAllMdFiles());
}

function buildCache() {
  const fileContent = `export const blogPosts: {
    fullFilePath: string,
    publicFilePath: string,
    oldSlug: string,
    draft: boolean,
    date: string,
    title: string,
    longExcerpt: string,
    url: string,
  }[] = ${JSON.stringify(getBlogsMetadata())};`;

  fs.writeFile("cache/blogPosts.tsx", fileContent, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Posts cached.");
  });
}

buildCache();

module.exports = {
  getBlogsMetadata,
};
