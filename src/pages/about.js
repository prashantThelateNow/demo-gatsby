import React from "react";
import Layout from "../components/layout/layout";

const About = () => {
  return (
    <Layout pageTitle="About Us">
      <p>This is rendering About Us!</p>
    </Layout>
  );
};

export default About;

export const Head = () => <title>About Us</title>;
