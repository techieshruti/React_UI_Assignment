import React from "react";
import ProfileTabs from "./components/ProfileTabs";
import GalleryWidget from "./components/GalleryWidget";

const App = () => {
  return (
    <div className="flex justify-end min-h-screen items-center px-10 bg-[#0f1117]">
      <div className="flex flex-col">
        <ProfileTabs />
        <GalleryWidget />
      </div>
    </div>
  );
};

export default App;
