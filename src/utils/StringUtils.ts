export const stripName = (str: string) => {
  if (!str) return "";
  return str.split(" ")[0];
};
