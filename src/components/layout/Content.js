import * as React from "react";

const Content = ({ pageTitle, children }) => {
  return (
    <main>
      <h1>{pageTitle}</h1>
      <div>{children}</div>
    </main>
  );
};

export default Content;
