import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>404</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        style={{
          textDecoration: "none",
          padding: "10px 16px",
          borderRadius: "6px",
          background: "#1976d2",
          color: "#fff",
        }}
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
