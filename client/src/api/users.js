import usersAPI from "./api.config";

const getUserById = async (id) => {
  const { data } = await usersAPI.get(id);
  return data;
};

export { getUserById };
