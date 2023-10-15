import { getBlogsMetadata } from "./getBlogPosts.js";
import widgetCatalog from "../public/widget-catalog/widgets.json" assert { type: "json" };
import fs from "fs";
import slugify from "../utils/slugify.js";

function writeSearch() {
  const _posts = getBlogsMetadata()
    .map(
      ({
        draft,
        title,
        tags,
        author,
        longExcerpt,
        shortExcerpt,
        url,
        _type,
      }) => ({
        draft,
        title,
        tags,
        author,
        longExcerpt,
        shortExcerpt,
        url,
        _type,
      })
    )
    .filter(({ draft }) => !draft);

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

  const workshops = {
    title: "Workshops",
    shortExcerpt: "We offer data science classes on request.",
    tags: ["Workshops", "classes", "education"],
    url: "/workshops",
    _type: "workshops",
  };

  const results = [..._posts, ...widgets, workshops];

  fs.writeFile("search.json", JSON.stringify(results), function (err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Search created.");
  });
}

writeSearch();
