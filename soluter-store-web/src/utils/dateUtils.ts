export const formatDate = (
  date: Date | string,
  includeTime?: boolean
): string => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const { day, month, year } = {
    day: date.getDate().toString().padStart(2, "0"),
    month: (date.getMonth() + 1).toString().padStart(2, "0"),
    year: date.getFullYear().toString(),
  };

  let formattedDate = `${day}/${month}/${year}`;

  if (includeTime) {
    const { hour, minute, second } = {
      hour: date.getHours().toString().padStart(2, "0"),
      minute: date.getMinutes().toString().padStart(2, "0"),
      second: date.getSeconds().toString().padStart(2, "0"),
    };
    formattedDate += ` ${hour}:${minute}:${second}`;
  }

  return formattedDate;
};
