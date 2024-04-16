import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      Header
      <main className="flex-1">{children}</main>
      Footer
    </div>
  );
};

export default Layout;
