import React from "react";
//COmponents
import Stories from "./Stories";
import Posts from "./Posts";
function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-col-3 xl:max-w-3xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section></section>
    </main>
  );
}

export default Feed;
