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
function Post({ id, img, userImg, caption, username }) {
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
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="btn" />
        <input type="text" className="border-none outline-none focus:ring-0" />
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;
