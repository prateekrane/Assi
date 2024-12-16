// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import StoriesListPage from "./pages/StoriesListPage";
// import StoryDetailPage from "./pages/StoryDetailPage";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<StoriesListPage />} />
//           <Route path="/story/:id" element={<StoryDetailPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StoriesListPage from "./pages/StoriesListPage";
import StoryDetails from "./components/StoryDetails"; // Import the StoryDetails component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<StoriesListPage />} />
          <Route path="/story-details/:id" element={<StoryDetails />} />{" "}
          {/* Updated route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
