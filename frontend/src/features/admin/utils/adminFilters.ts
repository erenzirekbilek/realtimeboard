export const filterUsers = <T extends { name?: string; email?: string }>(
  items: T[],
  search: string
): T[] => {
  if (!search) return items;
  const lowerSearch = search.toLowerCase();
  return items.filter(
    (item) =>
      item.name?.toLowerCase().includes(lowerSearch) ||
      item.email?.toLowerCase().includes(lowerSearch)
  );
};

export const filterByStatus = <T extends { isActive?: boolean; isBanned?: boolean }>(
  items: T[],
  status?: boolean
): T[] => {
  if (status === undefined) return items;
  return items.filter((item) => {
    if ('isActive' in item) return item.isActive === status;
    if ('isBanned' in item) return item.isBanned === status;
    return true;
  });
};

