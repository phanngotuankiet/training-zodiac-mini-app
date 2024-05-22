import React, { useState, useEffect } from "react";
import { Page } from "zmp-ui";
import TopUpdateBirthday from "../update-birthday/svg/TopUpdateBirthday";
import BelowButton from "../update-birthday/svg/BelowButton";
import ArticleCards from "./ArticleCards";
import { GHOST_ENDPOINT, GHOST_KEY, Post } from "./constant";

type Meta = {
  pagination: {
    page: number;
    limit: number;
    pages: number;
    total: number;
  };
}

type Tag = {
  slug: string;
  name: string;
}

const tagDefault = {
  slug: '',
  name: 'Mới nhất'
}

const Article = () => {
  const [articles, setArticles] = useState<{
    posts: Post[];
    meta: Meta;
  } | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Tag>(tagDefault);

  useEffect(() => {
    const fetchArticles = async () => {
      const url = new URL(`${GHOST_ENDPOINT}/content/posts?key=${GHOST_KEY}&fields=title,slug,feature_image&limit=10`);
      if (selectedFilter?.slug) {
        url.searchParams.append('filter', `tag:${selectedFilter.slug}`);
      }
      const res = await fetch(url.toString());
      setArticles(await res.json());
    };

    fetchArticles();
  }, [selectedFilter]);

  const filterPostByTag = (tag: Tag) => {
    setSelectedFilter(tag);
    setArticles(null);
  }

  return (
    <Page className="page bg-[#f4eee3] overflow-x-scroll">
      <div className="w-fit mx-auto">
        <TopUpdateBirthday />
        <div className="svn-seiston mx-auto -translate-y-16 w-full tracking-wider text-2xl text-[#9f7c35]">
          <p className="w-3/4 mx-auto text-center">
            Tổng hợp thông tin tử vi cung hoàng đạo
          </p>
          <BelowButton />
        </div>
      </div>
      <Filter
        selectedFilter={selectedFilter}
        filterPostByTag={filterPostByTag}
      />
      <ArticleCards posts={articles?.posts} />
    </Page>
  );
};

const Filter = ({
  selectedFilter,
  filterPostByTag,
}: {
  selectedFilter: Tag | null;
  filterPostByTag: (tag: Tag) => void;
}) => {
  const [filters, setFilters] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchTags = async () => {
      const res = await fetch(`${GHOST_ENDPOINT}/content/tags?key=${GHOST_KEY}`);
      const data = await res.json();
      setFilters([tagDefault, ...data.tags]);
    };

    fetchTags();
  }, []);

  return (
    <div className="flex space-x-2 mb-4 overflow-x-auto">
      {filters.map((filter, index) => (
        <button
          key={index}
          onClick={() => filterPostByTag(filter)}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            selectedFilter?.slug === filter.slug
              ? "bg-[#c1995c] text-white"
              : "border border-gray-300 text-gray-700"
          }`}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Article;
