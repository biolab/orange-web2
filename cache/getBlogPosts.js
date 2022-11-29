const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getAllMDFromDir(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          getAllMDFromDir(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else if (file.endsWith(".md")) {
          results.push(file);
          next();
        } else {
          next();
        }
      });
    })();
  });
}

function getPostsData(files) {
  const posts = files.map((postPath) => {
    const fileContents = fs.readFileSync(postPath, "utf8");
    let [fileName] = /[^/]*$/.exec(postPath);
    oldSlug = fileName.replace(/\.md$/, "");

    publicFilePath = postPath.split("/public/")[1].replace(fileName, "");

    const {
      data: { title, draft, longExcerpt, url },
    } = matter(fileContents);

    return {
      fullFilePath: postPath,
      publicFilePath,
      oldSlug,
      draft,
      title,
      longExcerpt,
      url: (url || title).replaceAll(" ", "-").toLowerCase(),
    };
  });
  return JSON.stringify(posts);
}

getAllMDFromDir("public/blog", function (err, files) {
  if (err) throw err;
  const posts = getPostsData(files);

  fileContent = `export const blogPosts: {
    fullFilePath: string,
    publicFilePath: string,
    oldSlug: string,
    draft: boolean,
    title: string,
    longExcerpt: string,
    url: string,
  }[] = ${posts};`;

  fs.writeFile("cache/blogPosts.tsx", fileContent, function (err) {
    if (err) return console.log(err);
    console.log("Posts cached.");
  });
});
