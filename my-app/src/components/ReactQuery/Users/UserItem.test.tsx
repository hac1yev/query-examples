import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import UserItem from "./UserItem";

const mockNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual<typeof import("react-router")>(
    "react-router"
  );

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock("./EditUser", () => ({
  default: ({ id }: { id: number }) => <div>Edit {id}</div>,
}));

vi.mock("./DeleteUser", () => ({
  default: ({ id }: { id: number }) => <div>Delete {id}</div>,
}));

describe("UserItem", () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@test.com",
    created_at: "2024-01-01T10:00:00.000Z",
  };

  const renderComponent = () => render(<UserItem {...user} />);

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it("renders user data correctly", () => {
    renderComponent();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@test.com")).toBeInTheDocument();
    expect(screen.getByText("Mon, 01 Jan 2024 10:00")).toBeInTheDocument();
  });

  it("formats and displays created date", () => {
    renderComponent();
    expect(
      screen.getByText((content) => content.includes("Mon, 01 Jan 2024 10:00"))
    ).toBeInTheDocument();
  });

  it("renders Edit and Delete actions", () => {
    renderComponent();
    expect(screen.getByText("Edit 1")).toBeInTheDocument();
    expect(screen.getByText("Delete 1")).toBeInTheDocument();
  });

  it("navigates to user detail on row click", () => {
    renderComponent();
    fireEvent.click(screen.getByRole("row"));
    expect(mockNavigate).toHaveBeenCalledWith("/1");
  });
});
