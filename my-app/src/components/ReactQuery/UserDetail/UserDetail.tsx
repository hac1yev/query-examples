import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { userApi } from "../../../api/userApi";

const UserDetail = () => {
  const { userId } = useParams();
  const { data } = useSuspenseQuery({
    queryKey: [`users/${userId}`],
    queryFn: userApi.bind(null, {
      endpoint: `api/users/${userId}`,
      method: "GET",
    }),
  });

  return (
    <>
      <h2>Name: {data.name}</h2>
      <h3>Email: {data.email}</h3>
    </>
  );
};

export default UserDetail;
