import React, { useState, useEffect } from "react";

//오늘의 추천 레시피
function Recommended() {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    getRecommended();
  }, []);

  const getRecommended = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
    );
    const data = await api.json();
    setRecommend(data.recipes);
    console.log(data.recipes);
  };
  return (
    <div>
      {recommend.map((recipe) => (
        <li key={recipe.id}>
          {recipe.title}
          <img src={recipe.image``} alt="img" />
        </li>
      ))}
    </div>
  );
}

export default Recommended;
