import React from "react";
import { List, Page, Icon, useNavigate } from "zmp-ui";
import { useRecoilValue } from "recoil";
import { userState } from "../state";
import { useProductQuery } from "../generated/graphql";
import UserCard from "../components/user-card";

const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const { data, loading, error } = useProductQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data);
  return (
    <Page className="page">
      <div className="section-container">Home Page</div>
    </Page>
  );
};

export default HomePage;
