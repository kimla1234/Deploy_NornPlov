// src/app/public_user/layout.tsx
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
  