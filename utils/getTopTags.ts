const getTopTags = (tags: string[], limit = 10) => {
  const tagCounts: { [key: string]: number } = {};

  tags.forEach((tag) => {
    if (tagCounts[tag]) {
      tagCounts[tag]++;
    } else {
      tagCounts[tag] = 1;
    }
  });

  return Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([tag]) => tag);
};

export default getTopTags;
