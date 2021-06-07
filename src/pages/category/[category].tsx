import React from "react";
import { wrapper } from "../../store";

const Category: React.FC = () => {
  return <>Hello</>;
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log(context.params);
  }
);

export default Category;
