// src/app/public_user/layout.tsx
import "@/src/app/globals.css";
export default function UserLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <main className="w-full">{children}</main>
      </div>
    );
  }
  