import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import UserEditModal from "../../Modal/UserEditModal";

const EditUser = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen(true);
  }

  return (
    <Box component={"div"} onClick={handleOpen}>
      <EditIcon />
      <UserEditModal open={open} setOpen={setOpen} id={id} />
    </Box>
  );
};

export default EditUser;
