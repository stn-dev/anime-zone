export const usePagination = (
  currentPage: number,
  itemPerPage: number,
  dataFiltered: string[]
) => {
  const lastItem = currentPage * itemPerPage;
  const firstItem = lastItem - itemPerPage;
  const shownItems = dataFiltered.slice(firstItem, lastItem);
  const paginationLength = Math.ceil(dataFiltered.length / itemPerPage);
  return { shownItems, paginationLength };
};
