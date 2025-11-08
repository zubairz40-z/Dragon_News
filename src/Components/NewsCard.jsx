import React from "react";
import { Link } from "react-router";
import { Bookmark, Share2, Eye, Star } from "lucide-react"; // npm i lucide-react

const NewsCard = ({ news }) => {
  // --- safe reads with fallbacks ---
  const {
    id,
    title = "Untitled",
    details = "",
    image_url,
    thumbnail_url,
    total_view = 0,
    rating = {},
    author = {},
  } = news || {};

  const displayImg = image_url || thumbnail_url;
  const ratingNumber = Number(rating?.number ?? 0);
  const authorName = author?.name || "Unknown";
  const authorImg = author?.img;
  const date = author?.published_date
    ? new Date(author.published_date).toLocaleDateString()
    : "—";

  // make 0–5 stars (allow decimal like 4.3)
  const fullStars = Math.floor(ratingNumber);
  const hasHalf = ratingNumber - fullStars >= 0.5;

  return (
    <article className=" border border-gray-300 bg-white shadow-sm overflow-hidden">
      {/* HEADER */}
      <div className="flex items-center justify-between p-4 bg-slate-50">
        <div className="flex items-center gap-3">
          {authorImg ? (
            <img
              src={authorImg}
              alt={authorName}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <div className="h-10 w-10 rounded-full bg-slate-200" />
          )}
          <div className="leading-tight">
            <div className="font-medium text-slate-900">{authorName}</div>
            <div className="text-xs text-slate-500">{date}</div>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-500">
          <button className="p-2 hover:bg-white rounded-lg" aria-label="Bookmark">
            <Bookmark size={18} />
          </button>
          <button className="p-2 hover:bg-white rounded-lg" aria-label="Share">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* TITLE */}
      <h3 className="px-4 pt-4 text-lg md:text-xl font-semibold leading-snug text-slate-900">
        {title}
      </h3>

      {/* IMAGE */}
      {displayImg && (
        <div className="px-4 pt-3">
          <img
            src={displayImg}
            alt={title}
            className="w-full h-56 md:h-64 rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* EXCERPT */}
      <div className="px-4 py-3 text-slate-700 text-sm">
        <p
          className="line-clamp-3"
          title={details}
        >
          {details}
        </p>
        <Link
          to={`/news/${id}`}
          className="mt-1 inline-block font-semibold text-orange-600 hover:underline"
        >
          Read More
        </Link>
      </div>

      {/* FOOTER: stars + rating + views */}
      <div className="px-4 pb-4 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-orange-500">
          {/* full stars */}
          {Array.from({ length: fullStars }).map((_, i) => (
            <Star key={`full-${i}`} size={16} fill="currentColor" />
          ))}
          {/* half star (simulate with a star + clip) */}
          {hasHalf && (
            <span className="relative inline-block">
              <Star size={16} className="text-orange-500/30" />
              <Star
                size={16}
                fill="currentColor"
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: "inset(0 50% 0 0)" }}
              />
            </span>
          )}
          {/* empty stars */}
          {Array.from({ length: 5 - fullStars - (hasHalf ? 1 : 0) }).map((_, i) => (
            <Star key={`empty-${i}`} size={16} className="text-orange-500/30" />
          ))}
          <span className="ml-2 text-slate-700">{ratingNumber.toFixed(1)}</span>
        </div>

        <div className="flex items-center gap-1 text-slate-600">
          <Eye size={16} />
          <span>{Number(total_view).toLocaleString()}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
