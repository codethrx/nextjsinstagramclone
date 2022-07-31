import React, { useEffect, useState } from "react";
//FAKER JS implementation
import { faker } from "@faker-js/faker";
//Components
import Story from "./Story";
function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    // console.log("Mounted");
    //FAKING THE DATA UP
    const suggestions = [...Array(20)].map((_, i) => ({
      name: faker.name.firstName(),
      img: faker.image.avatar(),
      id: i,
    }));
    setStories(suggestions);
  }, []);

  return (
    <div className="flex justify-between overflow-x-scroll mt-10 bg-white">
      {stories.map((profile) => {
        return <Story key={profile.id} name={profile.name} img={profile.img} />;
      })}
    </div>
  );
}

export default Stories;
