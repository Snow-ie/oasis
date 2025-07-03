import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
