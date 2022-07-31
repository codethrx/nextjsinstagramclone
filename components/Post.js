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
    </div>
  );
}

export default Post;
