import path from "path";

export default function getPublicFolderPath(postPath) {
  const fileName = path.basename(postPath);

  const publicFolder = "public";
  return postPath.slice(postPath.indexOf(publicFolder) + publicFolder.length).replace(fileName, "");
}
