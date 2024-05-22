import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { Post } from "./constant";

const SkeletonCards = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className="flex items-center mb-2 w-full">
      <Skeleton width={64} height={64} style={{ backgroundColor: "#f4eee3" }} />
      <Skeleton
        height={64}
        width={500}
        style={{ backgroundColor: "#f4eee3"}}
      />
    </div>
  ));
};

const ArticleCards = ({ posts }: { posts: Post[] | undefined }) => {
  if (!posts) return <SkeletonCards />;
  return (
    <div className="bg-[#f4eee3] rounded-lg">
      {posts.map((post, index) => (
        <Link
          key={index}
          className="flex items-center border-b border-gray-300 pb-2 mb-2"
          to={`/articles/${post.slug}`}
        >
          <img
            src={post.feature_image}
            alt={post.title}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="ml-4 text-sm">
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleCards;
