import React from "react";
import Post from "./Post";
function Posts() {
  const DUMMY_DATA = [
    {
      id: "1",
      username: "codethrx",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "Eloo babes...",
    },
    {
      id: "2",
      username: "css",
      userImg: "https://links.papareact.com/3ke",
      img: "https://links.papareact.com/3ke",
      caption: "Eloo babes...",
    },
  ];
  const mappedPosts = DUMMY_DATA.map((p) => (
    <Post
      key={p.id}
      id={p.id}
      username={p.username}
      userImg={p.userImg}
      img={p.img}
      caption={p.caption}
    />
  ));
  return <div>{mappedPosts}</div>;
}

export default Posts;
