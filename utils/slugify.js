export default function slugify(title) {
  return title
    .replace(/ /g, "-")
    .replace(/[.,\/#!?%\^&\*;:{}=\_`~()]/g, "")
    .toLowerCase();
}
