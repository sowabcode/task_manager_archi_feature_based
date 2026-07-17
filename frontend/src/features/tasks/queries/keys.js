export const taskKeys = {
  all: ["tasks"],
  lists: () => [...taskKeys.all, "list"],
  detail: (id) => [...taskKeys.all, id],
};
