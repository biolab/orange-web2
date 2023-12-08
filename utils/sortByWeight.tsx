export default function sortByWeight(items: any[]) {
  if (!Array.isArray(items)) {
    throw new Error("Item is not an array");
  }

  return items.sort((a, b) => a.weight || 99999 - b.weight || 99999);
}
