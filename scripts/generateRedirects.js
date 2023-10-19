import fs from "fs";
import {getBlogsMetadata} from "./getBlogPosts.js";

function writeRedirects() {
  const redirects = getBlogsMetadata()
    .filter((post) => (post.oldUrl != ""))
    .map((post) => ({
      "source": post.oldUrl.slice(0, -1),
      "destination": "/blog/" + post.url
    }))


  fs.writeFile("redirects.json", JSON.stringify(redirects), function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Redirects created.");
  });

}

writeRedirects();