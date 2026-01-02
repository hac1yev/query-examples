// types.ts
export interface IUserForm {
  username: string;
  email: string;
  password: string;
  birthday: string;
  avatar: FileList | null;
  phone: string;
  skills: string[];
}

export const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
];
