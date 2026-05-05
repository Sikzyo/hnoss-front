import { Outlet } from "react-router";

export function AuthLayout() {
  return (
    <main className="bg-background font-sora flex h-full flex-col gap-6 p-6">
      <Outlet />
    </main>
  );
}
