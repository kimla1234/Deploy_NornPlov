// src/app/public_user/layout.tsx
export default function PublicUserLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  }
  