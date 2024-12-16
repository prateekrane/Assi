// src/pages/StoriesListPage.js
import React, { useState, useEffect } from "react";
import { fetchStories } from "../services/apiService";
import StoryCard from "../components/StoryCard";

const StoriesListPage = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStories = async () => {
      try {
        // Fetch only 6 stories
        const data = await fetchStories(4);
        setStories(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadStories();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10 text-red-500">
        Error loading stories
      </div>
    );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">
        Science Fiction Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
};

export default StoriesListPage;
