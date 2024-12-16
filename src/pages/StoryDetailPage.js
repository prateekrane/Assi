// src/pages/StoryDetailPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchStoryById } from "../services/apiService";
import StoryDetailTabs from "../components/StoryDetailTabs";

const StoryDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStoryDetails = async () => {
      try {
        const data = await fetchStoryById(id);

        // Additional validation
        if (!data || Object.keys(data).length === 0) {
          throw new Error("No story data found");
        }

        setStory(data);
        setLoading(false);
      } catch (err) {
        console.error("Story fetch error:", err);
        setError(err);
        setLoading(false);

        // Optional: redirect to stories list on error
        // navigate('/');
      }
    };

    loadStoryDetails();
  }, [id, navigate]);

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
      <div className="text-center mt-10">
        <h2 className="text-2xl text-red-500 mb-4">
          Error Loading Story Details
        </h2>
        <p className="text-gray-600">{error.message}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reload Page
        </button>
      </div>
    );

  if (!story) return <div className="text-center mt-10">No story found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mr-6">
          <img
            src={getImageUrl(story?.Image)}
            alt={story.Title || "Story Image"}
            className="w-full rounded-lg shadow-lg object-cover"
            onError={(e) => {
              e.target.src = "/placeholder-image.png";
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
