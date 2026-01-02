import { useForm } from "react-hook-form";
import type { IUserForm } from "../../types/hook-form";
import { useCreateUser } from "../../hooks/useCreateUser";

const ReactHookForm = () => {
  const { mutate, isPending, error } = useCreateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    mode: "onBlur",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      birthday: "",
      avatar: null,
      phone: "",
      skills: [],
    },
  });

  const onSubmit = async (data: IUserForm) => {
    console.log(data);
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-50 m-auto d-flex flex-column gap-2"
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          {...register("username", {
            required: "This Field is Required!",
            minLength: {
              value: 3,
              message: "Character has to be at least 3",
            },
          })}
        />
        {errors.username && (
          <p className="error-text">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email", {
            required: "This Field is Required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="error-text">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("password", {
            required: "This Field is Required!",
            minLength: {
              value: 6,
              message: "Character has to be at least 6",
            },
          })}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          className="form-control"
          id="birthday"
          {...register("birthday", {
            required: "This Field is Required!",
            validate: (value) => {
              const selectedValue = new Date(value);
              if (selectedValue > new Date())
                return "Birthday cannot be in the future";
            },
          })}
        />
        {errors.birthday && (
          <p className="error-text">{errors.birthday.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="avatar">Avatar</label>
        <input
          type="file"
          className="form-control"
          accept="image/jpeg, image/png, image/gif"
          id="avatar"
          {...register("avatar", {
            required: "This Field is Reqired!",
            validate: {
              lessThan1MB: (files) =>
                files[0]?.size < 1000000 || "Max size is 1MB",
            },
          })}
        />
        {errors.avatar && <p className="error-text">{errors.avatar.message}</p>}
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          {...register("phone", {
            required: "This Field is Required!",
            validate: (value) => {
              const isNumeric = /^\d+$/.test(value);
              if (!isNumeric) return "Phone number must contain only digits";
              if (value.length !== 10)
                return "Phone number must be exactly 10 digits";
              return true;
            },
          })}
        />
        {errors.phone && <p className="error-text">{errors.phone.message}</p>}
      </div>
      <button className="btn btn-primary w-25 ms-auto">Submit</button>
    </form>
  );
};

export default ReactHookForm;
