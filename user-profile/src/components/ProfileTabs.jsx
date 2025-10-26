import React, { useState } from "react";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  return (
    <div className="bg-[#3d4045] p-4 rounded-2xl shadow-lg max-w-[600px] w-full">
      {/* Tabs */}
      <div className="flex bg-[#161617] rounded-3xl gap-6 mb-4 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-1 text-m font-medium ${
              activeTab === tab.id
                ? "bg-[#272a30] rounded-3xl text-center p-4 border-white text-white"
                : "text-gray-400 hover:text-white "
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="text-gray-400 text-m py-0 px-[15px] leading-relaxed">
        {activeTab === "about" && (
          <>
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-2">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters — Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM.
            </p>
          </>
        )}
        {activeTab === "experiences" && (
          <p>I've worked on multiple enterprise-level CRM solutions...</p>
        )}
        {activeTab === "recommended" && (
          <p>Colleagues often recommend me for my team collaboration...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
