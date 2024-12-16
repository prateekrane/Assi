// // src/components/StoryDetailTabs.js
// import React, { useState } from "react";

// const StoryDetailTabs = ({ story }) => {
//   const [activeTab, setActiveTab] = useState("synopsis");

//   const tabs = [
//     { id: "synopsis", label: "Synopsis" },
//     { id: "details", label: "Story Details" },
//     { id: "author", label: "Author Info" },
//   ];

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "synopsis":
//         return (
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Synopsis</h2>
//             <p>{story.Description}</p>
//           </div>
//         );
//       case "details":
//         return (
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Story Details</h2>
//             <p>
//               <strong>Published:</strong> {story.PublishedDate}
//             </p>
//             <p>
//               <strong>Genre:</strong> Science Fiction
//             </p>
//           </div>
//         );
//       case "author":
//         return (
//           <div className="p-4">
//             <h2 className="text-2xl font-bold mb-4">Author Information</h2>
//             <p>
//               <strong>Author:</strong> {story.Author}
//             </p>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="flex border-b">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             className={`px-4 py-2 ${
//               activeTab === tab.id
//                 ? "border-b-2 border-blue-500 text-blue-600"
//                 : "text-gray-500"
//             }`}
//             onClick={() => setActiveTab(tab.id)}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>
//       <div>{renderTabContent()}</div>
//     </div>
//   );
// };

// export default StoryDetailTabs;

// src/pages/StoryDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchStoryById } from "../services/apiService";
import StoryDetailTabs from "../components/StoryDetailTabs";

const StoryDetailPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStoryDetails = async () => {
      try {
        const data = await fetchStoryById(id);
        setStory(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadStoryDetails();
  }, [id]);

  // Construct the full image URL
  const getImageUrl = (image) => {
    return image
      ? `https://ik.imagekit.io/dev24/${image}`
      : "/placeholder-image.png";
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading story details
      </div>
    );
  if (!story) return <div className="text-center mt-10">No story found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mr-6">
          <img
            src={getImageUrl(story?.Image)}
            alt={story.Title}
            className="w-full rounded-lg shadow-lg object-cover"
            onError={(e) => {
              e.target.src = "/placeholder-image.png"; // Fallback if image fails to load
            }}
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{story.Title}</h1>
          <StoryDetailTabs story={story} />
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;
