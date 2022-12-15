import { getBlogsMetadata } from "./getBlogsMetadata";

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
