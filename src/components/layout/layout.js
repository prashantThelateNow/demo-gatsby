import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <Content pageTitle={pageTitle}>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
