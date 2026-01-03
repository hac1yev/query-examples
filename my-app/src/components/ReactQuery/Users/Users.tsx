import { useSuspenseQuery } from "@tanstack/react-query";
import { userApi } from "../../../api/userApi";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import AddUser from "./AddUser";
import UserItem from "./UserItem";

export interface IUserItem {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

type IUsers = IUserItem[];

const Users = () => {
  const {
    data: users,
  } = useSuspenseQuery<IUsers | []>({
    queryKey: ["users"],
    queryFn: userApi.bind(null, { endpoint: "api/users", method: "GET" }),
  });

  return (
    <Box>
      <AddUser />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Created at</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .sort((a, b) => a.id - b.id)
              .map((user: IUserItem) => (
                <UserItem key={user.id} {...user} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
