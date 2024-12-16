import React from "react";
import { useParams } from "react-router-dom";

const StoryDetails = ({ stories }) => {
  const { id } = useParams();
  const story = stories.find((story) => story.id === parseInt(id));

  if (!story) {
    return <div>Story not found.</div>;
  }

  const { Title, Description, Image, content } = story;

  return (
    <div className="story-details">
      <h1 className="text-4xl font-bold mb-4">{Title}</h1>
      <p className="text-gray-700 mb-6">{Description}</p>

      {/* Story Images */}
      <div className="story-images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Image?.map((img, index) => (
          <img
            key={index}
            src={`https://ik.imagekit.io/dev24/${img}`}
            alt={`Story illustration ${index + 1}`}
            className="rounded-lg shadow-lg"
          />
        ))}
      </div>

      {/* Story Content */}
      <div className="story-content mt-8">
        <h2 className="text-2xl font-semibold mb-4">Adventure Highlights</h2>
        <p className="text-gray-600 mb-4">{content.text}</p>

        {/* Content Images */}
        <div className="section-images grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.Storyimage.map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={`https://ik.imagekit.io/dev24/${img}`}
              alt={`Adventure scene ${imgIndex + 1}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
