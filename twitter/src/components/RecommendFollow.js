import React from "react";
import styled from "styled-components";
import RecFollowItem from "./RecFollowItem";
import RecommendFollowBox from "./RecommendFollowBox";

export default function RecommendFollow() {
  return (
    <RecArea>
      <RecommendFollowBox />
    </RecArea>
  );
}

const RecArea = styled.div`
  width: 100%;
  height: 100%;
  margin: 15px 0;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  background: #f0f3f4;
`;
