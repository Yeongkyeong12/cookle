import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/searched/" + name);
        }}
      >
        <div>
          <FaSearch color="#413f3f" />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
        </div>
      </FormStyle>
    </>
  );
}

const FormStyle = styled.form`
  margin: 0rem 6rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(30deg, #f4f4f4, #e7e7e7);
    font-size: 1.5rem;
    font-weight: 500;
    color: rgb(56, 56, 56);
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    height: 80%;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
