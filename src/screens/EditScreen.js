import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { Context } from "../context/BlogContext";
import BlogPostFrom from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <BlogPostFrom
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        // addBlogPost(title, content, () => navigation.navigate("Index"));
        editBlogPost(navigation.getParam("id"), title, content);
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
