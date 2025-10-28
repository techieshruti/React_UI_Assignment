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
              twin daughters - Emma and Ella. Both of them are just starting
              school, so my  is usually blocked between 9–10 AM.
            </p>
          </>
        )}
        {activeTab === "experiences" && (
          <>
          <p>Over the past 3 years at Salesforce, I’ve worked as a Sales Representative, helping small and mid-sized businesses streamline their sales processes through CRM solutions.
My role primarily involves identifying client needs, presenting tailored Salesforce demos, and ensuring smooth onboarding.</p>
<p className="mt-2">
During this time, I’ve successfully closed deals with over 120 clients, consistently exceeding quarterly targets by 15–20%. I’ve also collaborated closely with the product and support teams to ensure customers receive the best post-sale experience possible.</p></>
        )}
        {activeTab === "recommended" && (
          <>
          <p>Sarah Mitchell, my Regional Manager at Salesforce, once mentioned that “Dave has an incredible ability to connect with clients on a personal level - he listens, understands, and always delivers value beyond expectations.”</p>
          <p className="mt-2">
Jason Reed, one of my long-term clients from CloudSync Solutions, shared that “Dave doesn’t just sell a product - he partners with you to find the right solution. His honesty and follow-up support made our transition to Salesforce seamless.”</p>
<p className="mt-2">
Maria Lopez, a fellow team member, described me as “a dependable colleague who’s always willing to help others close deals and share insights that make the entire team stronger.”</p>
</>
        )}
      </div>
    </div>
  );
};

export default ProfileTabs;
