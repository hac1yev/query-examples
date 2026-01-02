import { TableCell, TableRow } from "@mui/material";
import { useNavigate } from "react-router";
import type { IUserItem } from "./Users";
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

const UserItem = ({ id, name, email, created_at }: IUserItem) => {
  const navigate = useNavigate();

  return (
    <TableRow
      className="user-row"
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      onClick={() => navigate(`/${id}`)}
    >
      <TableCell component="th" scope="row">
        {id}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">
        {new Date(created_at).toUTCString().slice(0, -4)}
      </TableCell>
      <TableCell align="right" sx={{ display: 'flex', gap: 1 }}>
        <EditUser id={id} />
        <DeleteUser id={id} />
      </TableCell>
    </TableRow>
  );
};

export default UserItem;
