
// pages/SearchResults.jsx
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("query");

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold mb-4">Search Results</h1>
      <p className="text-lg text-gray-700">
        Showing results for: <span className="font-bold">{query}</span>
      </p>
         </div>
  );
};

export default SearchResults;
