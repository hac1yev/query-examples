import { useMutation } from "@tanstack/react-query";
import { userApi, type IUserApi } from "../api/userApi";

export const useCreateUser = ({ endpoint, method }: IUserApi) => {
  const createUser = (data?: { name: string, email: string }) => {
    
    return userApi({
      endpoint,
      method,
      body: JSON.stringify(data)
    })
  };

  return useMutation({
    mutationFn: createUser,
  });
};
