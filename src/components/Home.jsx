import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

const StyledHome = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFav = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline 1px #f3f3f3;
  }
`;

function FavoriteItem({ url, title }) {
  return <StyledFav onClick={() => window.open(url)}>{title}</StyledFav>;
}

export default function Home() {
  const { favorites } = useContext(AppContext);
  return (
    <StyledHome>
      {favorites ? (
        <ol>
          {favorites.map((fav, index) => (
            <FavoriteItem key={index} {...fav} />
          ))}
        </ol>
      ) : (
        <h6>Rien à visiter pour le moment...</h6>
      )}
    </StyledHome>
  );
}
