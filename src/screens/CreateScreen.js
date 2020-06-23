import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <BlogPostFrom />;
};

export default CreateScreen;

const styles = StyleSheet.create({});
