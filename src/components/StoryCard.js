// // src/components/StoryCard.js
// import React from "react";
// import { Link } from "react-router-dom";

// const StoryCard = ({ story }) => {
//   return (
//     <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
//       <img
//         src={`https://ik.imagekit.io/dev24/${story?.Image}`}
//         alt={story.Title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="px-6 py-4">
//         <div className="font-bold text-xl mb-2">{story.Title}</div>
//         <p className="text-gray-700 text-base truncate">{story.Description}</p>
//       </div>
//       <div className="px-6 pt-4 pb-2">
//         <Link
//           to={`https://mxpertztestapi.onrender.com/api/sciencefiction/?id=${story.id}`}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           View Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default StoryCard;

// src/components/StoryCard.js
import React from "react";
import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <img
        src={`https://ik.imagekit.io/dev24/${story?.Image}`}
        alt={story.Title}
        className="w-full h-48 object-cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{story.Title}</div>
        <p className="text-gray-700 text-base truncate">{story.Description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={`/story-details/${story.id}`} // Navigate to StoryDetails using dynamic route
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default StoryCard;
