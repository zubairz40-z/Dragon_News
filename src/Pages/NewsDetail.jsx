// src/Pages/NewsDetails.jsx
import React from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const all = useLoaderData() || [];
  const news = all.find((n) => String(n.id) === String(id));

  if (!news) return <div className="p-6">Not found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">{news.title}</h1>
      <img src={news.image_url || news.thumbnail_url} alt={news.title} className="w-full rounded-xl my-4 object-cover" />
      <p className="text-slate-700">{news.details}</p>
      <div className="mt-6">
        <Link to="/" className="btn btn-outline">← Back</Link>
      </div>
    </div>
  );
};

export default NewsDetails;
