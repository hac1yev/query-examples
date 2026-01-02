export const emailRegex =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validateBirthday = (value: string) => {
  const selectedDate = new Date(value);
  return selectedDate <= new Date() || "Birthday cannot be in the future";
};

export const validatePhone = (value: string) => {
  if (!/^\d+$/.test(value)) return "Phone must contain only digits";
  if (value.length !== 10) return "Phone must be exactly 10 digits";
  return true;
};

export const validateAvatar = (files: FileList | null) => {
  if (!files || !files.length) return "Avatar is required";
  if (files[0].size > 1_000_000) return "Max file size is 1MB";
  return true;
};
