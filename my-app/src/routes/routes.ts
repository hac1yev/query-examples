import { createBrowserRouter } from "react-router";
import Users from "../components/ReactQuery/Users/Users";
import UserDetail from "../components/ReactQuery/UserDetail/UserDetail";
import QueryClientWrapper from "../components/QueryClientWrapper";
import UserErrorPage from "../components/UserError";
import NotFoundPage from "../components/ReactQuery/Users/NotFundPage";
import { UserLoader } from "../components/ReactQuery/Users/UserLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: QueryClientWrapper,
    children: [
      { index: true, Component: Users, ErrorBoundary: UserErrorPage },
      {
        path: ":userId",
        Component: UserDetail,
        loader: UserLoader,
        ErrorBoundary: UserErrorPage,
      },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
