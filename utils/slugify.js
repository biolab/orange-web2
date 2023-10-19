import slugify from "slugify";

export default function _slugify(title) {
  return slugify(title, { lower: true });
}
