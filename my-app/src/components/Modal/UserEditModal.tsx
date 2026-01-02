import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useForm } from "react-hook-form";
import type { IUserItem } from "../ReactQuery/Users/Users";
import { TextField } from "@mui/material";
import { userApi } from "../../api/userApi";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IUserEditModal {
  open: boolean;
  setOpen: (value: boolean) => void;
  id: number;
}

const UserEditModal = ({ open, setOpen, id }: IUserEditModal) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserItem>();
  const handleClose = () => setOpen(false);
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: userApi.bind(null, { endpoint: `api/users/${id}`, method: "GET" }),
    enabled: open,
    initialData: {},
  });
  const { mutate, isPending } = useCreateUser({
    endpoint: `api/users/${id}`,
    method: "PUT",
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, reset]);

  const handleEdit = (data: Pick<IUserItem, "name" | "email">) => {
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        setOpen(false);
      },
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit(handleEdit)}
          sx={{ m: 3, display: "flex", alignItems: "center", gap: 2 }}
        >
          <Box>
            <TextField
              id="name"
              label="Name"
              disabled={isPending}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register("name", {
                required: "Name is required!",
                minLength: {
                  value: 6,
                  message: "Field must contain at least 6 character!",
                },
              })}
            />
            {errors.name && (
              <Typography variant="body1" className="error-text">
                {errors.name.message}
              </Typography>
            )}
          </Box>
          <Box>
            <TextField
              id="email"
              label="Email"
              disabled={isPending}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address!",
                },
              })}
            />
            {errors.email && (
              <Typography variant="body1" className="error-text">
                {errors.email.message}
              </Typography>
            )}
          </Box>
          <button>{isPending ? "Saving..." : "Save"}</button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UserEditModal;
