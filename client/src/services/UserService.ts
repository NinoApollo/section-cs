import AxiosInstance from "./AxiosInstance";

const UserService = {
  loadUsers: async () => {
    try {
      const response = await AxiosInstance.get("/users/loadUsers");
      return response;
    } catch (error) {
      throw error;
    }
  },
  storeUser: async (data: any) => {
    try {
      const response = await AxiosInstance.post("/users/storeUser", data);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;
