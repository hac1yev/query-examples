import { useRouteError, isRouteErrorResponse } from "react-router";

const UserErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status} Error</h1>
        <p>{error.data}</p>
      </div>
    );
  }

  return (
    <div style={{ color: 'red' }}>
      <h2>Oops! Application Error</h2>
      <p>{error instanceof Error ? error.message : "An unknown error occurred"}</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default UserErrorPage;