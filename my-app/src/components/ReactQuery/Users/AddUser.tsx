import { Box, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import type { IUserItem } from "./Users";
import { useCreateUser } from "../../../hooks/useCreateUser";
import { useQueryClient } from "@tanstack/react-query";

const AddUser = () => {
  const queryClient = useQueryClient();  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserItem>();

  const { mutate, isPending } = useCreateUser({ endpoint: 'api/users', method: 'POST' });

  const onFormSubmit = (data: Pick<IUserItem, "name" | "email">) => {
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onFormSubmit)}
      sx={{ m: 3, display: "flex", alignItems: "center", gap: 2 }}
    >
      <Box>
        <TextField
          id="name"
          label="Name"
          disabled={isPending}
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
      <button>{isPending ? "Adding..." : "Add User"}</button>
    </Box>
  );
};

export default AddUser;
