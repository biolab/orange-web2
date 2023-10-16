const formateDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString("en-EN", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  if (formattedDate.includes("Invalid")) {
    throw new Error("Invalid date");
  }
  return formattedDate;
};

export default formateDate;
