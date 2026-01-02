import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useQueryClient } from "@tanstack/react-query";
import { useCreateUser } from "../../../hooks/useCreateUser";

const DeleteUser = ({ id }: { id: number }) => {
  const queryClient = useQueryClient();
  const { mutate } = useCreateUser({ endpoint: `api/users/${id}`, method: "DELETE" });

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      }
    })
  };

  return (
    <Box component={"div"} onClick={handleDelete}>
      <DeleteIcon />
    </Box>
  );
};

export default DeleteUser;
