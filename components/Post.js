import React from "react";
//icons
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
function Post({ id, img, userImg, caption, username }) {
  const [comment, setComment] = React.useState("");
  const [comments, setComments] = React.useState([]);
  const { data } = useSession();
  React.useEffect(() => {
    return onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snap) => {
        setComments(snap.docs);
      }
    );
  }, [db]);
  //event handelrs
  const postComment = async () => {
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: data.user.name,
      profileImg: data.user.image,
      timestamp: serverTimestamp(),
    });
  };
  const likePost = async () => {
    await setDoc(doc(db, "posts", id, "likes", data.user.uid), {
      username: data.user.name,
    });
  };
  console.log(data);
  return (
    <div className="bg-white my-7 border-rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1"
        />

        <p className="flex-1 font-bold">{username}</p>

        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={img} alt={img} className="object-cover w-full " />
      <div className="flex justify-between pt-4">
        <div className="flex space-x-4">
          {" "}
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <div>
        <p className="truncate p-5">
          <span>{username}</span> {caption}
        </p>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center p-4 flex-1 "
      >
        <EmojiHappyIcon className="btn" />
        {comments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <img
                src={comment.data().profileImg}
                alt={comment.data().profileImg}
                className="h-5 w-5 rounded-full"
              />
              <span>{comment.data().username}</span>
              <span className="bold">{comment.data().comment}</span>
            </div>
          ))}
        <input
          className="w-full border-none outline-none focus:ring-0"
          placeholder="Add a comment..."
          type="text"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        />
        <button onClick={postComment}>Post</button>
      </form>
    </div>
  );
}

export default Post;
