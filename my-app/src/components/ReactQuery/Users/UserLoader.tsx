import type { Params } from "react-router";

export async function UserLoader({ params }: { params: Readonly<Params<string>>; }) {
  const { userId } = params;

  const response = await fetch(`http://localhost:3000/api/users/${userId}`);
  
  if (!response.ok) {
    throw new Response("User not found", { status: 404 });
  }

  const user = await response.json();
  return user;
}
