import React from "react";
import styled from "styled-components";
import Search from "./Search";

function MyJumbotron() {
  return (
    <Wrapper>
      <h1>Cookle,</h1>
      <h2>Recipes All Around The World</h2>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </Wrapper>
  );
}

export default MyJumbotron;

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),
    url("https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-weight: 600;
  }
  h2 {
    color: #fff;
  }
`;

const SearchWrapper = styled.div`
  width: 65%;
  margin-top: 1.563rem;
`;
