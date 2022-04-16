import React, { useState, useEffect } from "react";
import MyJumbotron from "../components/MyJumbotron";
import Recommended from "../components/Recommended";

function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
    );
    const data = await api.json();
    setRecipes(data.recipes);
    console.log(data.recipes);
  };
  return (
    <div>
      <MyJumbotron />
      <Recommended />
    </div>
  );
}

export default Home;
