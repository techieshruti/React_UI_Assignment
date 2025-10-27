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
      <div className="flex bg-[#161617] rounded-3xl gap-6 mb-4 border-b border-gray-700 shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-m font-medium ${
              activeTab === tab.id
                ? "bg-[#272a30] items-center rounded-3xl p-4 border-white text-white shadow-lg shadow-gray-800"
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
          <><p>I have over two years of hands-on experience as a Frontend Developer, specializing in building responsive and user-friendly web applications using React.js, JavaScript, and Tailwind CSS.</p><p className="mt-2">
Currently, I’m working at TechNova Solutions, where I collaborate with designers and backend developers to create modern interfaces that enhance user experience and performance. My key focus areas include component reusability, UI consistency, and optimizing page load speeds.</p></>
        )}
        {activeTab === "recommended" && (
          <>
          <p>I’ve had the privilege of working with talented professionals who’ve shared valuable feedback about my work ethic and technical skills.</p>
          <p className="mt-2">
Aditi Sharma, a Product Designer at PixelWorks, describes me as a developer who “pays great attention to detail and always ensures that design and functionality align perfectly.”</p>
<p className="mt-2">
Arjun Mehta, Software Engineer at DevCraft, appreciated my ability to “quickly adapt to new tools and consistently write clean, maintainable React code.”
Sneha Patil, Team Lead at NovaTech, highlighted my “commitment to quality and timely delivery,” emphasizing how I consistently meet project expectations with precision and creativity.</p>
</>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
