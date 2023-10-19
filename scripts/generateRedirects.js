import fs from "fs";
import {getBlogsMetadata} from "./getBlogPosts.js";

function writeRedirects() {
  const _posts = getBlogsMetadata()

  const redirects = []
  for (let i = 0; i < _posts.length; i++) {
    redirects.push({
        "source": _posts[i].oldUrl.slice(0, -1),
        "destination": "/blog/" + _posts[i].url
    });
  }


  fs.writeFile("redirects.json", JSON.stringify(redirects), function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Redirects created.");
  });

}

writeRedirects();