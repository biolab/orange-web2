export default function addRelativePathToImages(content: string, imgRelativePath: string): string {
  if (!imgRelativePath || !content) {
    return content;
  }

  // Add relative path IF img src does NOT start with 'http' OR '/'
  return content
    .replace(/src="(?!(http)|(\/))/g, `src="${imgRelativePath}`)
    .replace(/\]\((?!(http)|(\/))/g, `](${imgRelativePath}`);
}
