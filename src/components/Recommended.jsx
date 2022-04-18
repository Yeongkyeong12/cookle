import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

//Home화면 랜덤 추천 레시피
function Recommended() {
  const [recommend, setRecommend] = useState([]);
  useEffect(() => {
    getRecommend();
  }, []);

  const getRecommend = async () => {
    const check = localStorage.getItem("recommend");

    if (check) {
      setRecommend(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
      );
      const data = await api.json();

      localStorage.setItem("recommend", JSON.stringify(data.recipes));
      setRecommend(data.recipes);
      console.log(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <Title>Today's Pick</Title>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
            gap: "3.5rem",
          }}
        >
          {recommend.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Title = styled.h3`
  font-weight: 600;
`;
const Wrapper = styled.div`
  margin: 4rem 10%;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1.5rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.3rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Recommended;
