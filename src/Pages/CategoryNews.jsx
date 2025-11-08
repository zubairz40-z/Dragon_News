import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router"; // ✅ use react-router-dom
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();           // ✅ read ":id" from the URL (string like "0", "1", "7")
  const data = useLoaderData() || [];   // ✅ data from your route loader (e.g., /news.json). Fallback to []

  const [categoryNews, setCategoryNews] = useState([]); // ✅ what we will display

  useEffect(() => {
    // ✅ guard: if loader didn't return an array yet, show empty safely
    if (!Array.isArray(data)) {
      setCategoryNews([]);
      return;
    }

    if (id === "0") {
      // ✅ id "0" → show ALL news
      setCategoryNews(data);
      return;
    }

    if (id === "1") {
      // ✅ id "1" → show "today's pick"
      const filtered = data.filter(n => n?.others?.is_today_pick === true);
      setCategoryNews(filtered);
      return;
    }

    // ✅ otherwise → filter by category id (both compared as strings)
    const filtered = data.filter(n => String(n?.category_id) === String(id));
    setCategoryNews(filtered);
  }, [id, data]); // 🔁 re-run when URL id or data changes

  return (
    <div>
        <h2 className="items-center text-center font-bold mb-5">
      Total <span className="text-secondary">{categoryNews.length}</span> News Found </h2> 

      <div className="grid grid-cols-1 gap-5">
        {
            categoryNews.map(news =><NewsCard key={news.id}
                news={news}></NewsCard> )
        }

      </div>
     
    </div>
  );
};

export default CategoryNews;
