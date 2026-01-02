import { createBrowserRouter } from "react-router";
import Users from "../components/ReactQuery/Users/Users";
import UserDetail from "../components/ReactQuery/UserDetail/UserDetail";
import QueryClientWrapper from "../components/QueryClientWrapper";
import UserErrorPage from "../components/UserError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: QueryClientWrapper,
    children: [
      { index: true, Component: Users, ErrorBoundary: UserErrorPage },
      { path: ":userId", Component: UserDetail, ErrorBoundary: UserErrorPage },
    ],
  },
]);
