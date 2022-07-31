import React, { useEffect, useState } from "react";
import Post from "./Post";
//firebase
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
function Posts() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "asc")),
      (snap) => {
        setPosts(snap.docs);
      }
    );
    return unsub;
  }, []);
  const mappedPosts = posts?.map((p) => {
    return (
      <Post
        key={p.id}
        id={p.id}
        username={p.data().username}
        userImg={p.data().profileImg}
        img={p.data().imageUrl}
        caption={p.data().caption}
      />
    );
  });
  return <div>{mappedPosts}</div>;
}

export default Posts;
