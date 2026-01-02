export interface IUserApi {
  endpoint: string;
  method: string;
  body?: string;
}

export const userApi = async ({ endpoint, method, body }: IUserApi) => {
  const response = await fetch(`http://localhost:3000/${endpoint}`, {
    method,
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
