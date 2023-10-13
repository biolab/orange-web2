import { getBlogsMetadata } from "./getBlogPosts.js";
import widgetCatalog from "../public/widget-catalog/widgets.json" assert { type: "json" };
import fs from "fs";
import slugify from "../utils/slugify.js";

function writeSearch() {
  const _posts = getBlogsMetadata();

  const widgets = widgetCatalog.flatMap(([_, widgets]) =>
    widgets
      .map((widget) =>
        widget.url
          ? {
              category: widget.category,
              title: widget.title,
              url: `${slugify(widget.category)}/${widget.url}`,
              keywords: widget.keywords,
              _type: "widget",
            }
          : undefined
      )
      .filter(Boolean)
  );

  const posts = [..._posts, ...widgets];

  fs.writeFile("search.json", JSON.stringify(posts), function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Search created.");
  });
}

writeSearch();
