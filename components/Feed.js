import React from "react";
//COmponents
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion";
function Feed() {
  return (
    <main className="grid grid-cols-3 md:grid-cols-2 md:max-w-3xl xl:grid-col-3 xl:max-w-3xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden md:col-span-1 xl:inline-grid ">
        <MiniProfile />
        <Suggestion />
      </section>
    </main>
  );
}

export default Feed;
