import React, { useEffect, useState } from "react";
import { Page } from "zmp-ui";
import { useParams } from "react-router-dom";
import ArticleCards from "./ArticleCards";
import Skeleton from "react-loading-skeleton";
import { GHOST_ENDPOINT, GHOST_KEY, Post } from "./constant";

type Article = {
  title: string;
  html: string;
};

const ArticleDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState<Article | null>(null);
  const [articleRelated, setArticleRelated] = useState<Post[] | undefined>(
    undefined
  );

  useEffect(() => {
    Promise.all([
      fetch(
        `${GHOST_ENDPOINT}/content/posts/slug/${slug}?key=${GHOST_KEY}&fields=title,html`
      ),
      fetch(
        `${GHOST_ENDPOINT}/content/posts?key=${GHOST_KEY}&fields=title,slug,feature_image&limit=5`
      ),
    ])
      .then(([articleRes, postsRes]) =>
        Promise.all([articleRes.json(), postsRes.json()])
      )
      .then(([articleData, postsData]) => {
        setArticle(articleData.posts[0]);
        setArticleRelated(postsData.posts);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [slug]);

  return (
    <Page className="page bg-[#f4eee3] overflow-x-scroll p-4">
      {article ? (
        <div className="mb-10">
          <h1 className="svn-seiston mx-auto w-full tracking-wider text-2xl text-[#9f7c35]">
            {article.title}
          </h1>
          <div
            className="prose text-[#686868] text-justify mt-4"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      ) : (
        <div className="mb-10">
          <Skeleton
            count={2}
            height={100}
            style={{ backgroundColor: "#f4eee3" }}
          />
        </div>
      )}
      <ArticleCards posts={articleRelated} />
    </Page>
  );
};

export default ArticleDetail;
