import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [detail, setDetail] = useState({});
  const [isActive, setIsActive] = useState("guide");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailedData = await data.json();
    setDetail(detailedData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <Wrapper>
      <div>
        <img src={detail.image} alt="" />

        <h2>{detail.title}</h2>
      </div>
      <Content>
        <Btn
          className={isActive === "guide" ? "active" : ""}
          onClick={() => setIsActive("guide")}
        >
          Guide
        </Btn>
        <Btn
          className={isActive === "ingredients" ? "active" : ""}
          onClick={() => setIsActive("ingredients")}
        >
          Ingredients
        </Btn>
        {isActive === "guide" && (
          <div>
            {/* dangerouslySetInnerHTML: 브라우저DOM에서 innerHTML을 사용하기 위한 React의 대체 방법*/}
            <h3 dangerouslySetInnerHTML={{ __html: detail.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: detail.instructions }}></h3>
          </div>
        )}

        {isActive === "ingredients" && (
          <ul>
            {detail.extendedIngredients.map((item) => (
              <li key={item.id}>{item.original}</li>
            ))}
          </ul>
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 10rem 12%;
  display: flex;
  .active {
    background: linear-gradient(30deg, #fdd25e, #fec853);
    color: #fff;
  }
  h2 {
    margin-top: 1.5rem;
  }
  h3 {
    font-size: 1.3rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Btn = styled.button`
  padding: 1rem 2rem;
  color: #303030;
  background: #fff;
  border: 0.14rem solid #212529;
  border-radius: 0.5rem;
  margin-right: 2rem;
  font-weight: 600;
`;

const Content = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
