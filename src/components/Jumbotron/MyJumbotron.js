import React from "react";
import styled from "styled-components";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function MyJumbotron() {
  return (
    <Wrapper>
      <InputWrapper>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search Recipes!"
            aria-label="Recipe Search Input"
            aria-describedby="search-button"
          />
          <Button variant="warning" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </InputWrapper>
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
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: 65%;
`;
