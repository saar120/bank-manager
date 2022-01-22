import usersAPI from "./api.config";

const getUserById = async (id) => {
  const { data } = await usersAPI.get(id);
  return data;
};

const getAllUsers = async () => {
  const { data } = await usersAPI.get("/");
  return data;
};

const deleteUser = async (id) => {
  const { data } = await usersAPI.delete(id);
  return data;
};

export { getUserById, deleteUser };
