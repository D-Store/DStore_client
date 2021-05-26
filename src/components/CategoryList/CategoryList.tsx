import React from "react";
import Link from "next/link";
import {
  CategoryContainer,
  CategoryContent,
  CategoryItem,
} from "./CategoryList.style";
import web from "../../public/static/image/Category_web.png";
import app from "../../public/static/image/Category_app.png";
import game from "../../public/static/image/Category_game.png";
import embedded from "../../public/static/image/Category_embedded.png";

const CategoryList: React.FC = () => {
  return (
    <div>
      <CategoryContainer>
        <CategoryContent>
          <Link href="/web">
            <CategoryItem>
              <a>웹</a>
              <img src={web} className="icon" />
            </CategoryItem>
          </Link>
          <Link href="/app">
            <CategoryItem>
              <a>앱</a>
              <img src={app} className="icon" />
            </CategoryItem>
          </Link>
          <Link href="/game">
            <CategoryItem>
              <a>게임</a>
              <img src={game} className="icon" />
            </CategoryItem>
          </Link>
          <Link href="/embedded">
            <CategoryItem>
              <a>임베디드</a>
              <img src={embedded} className="icon" />
            </CategoryItem>
          </Link>
        </CategoryContent>
      </CategoryContainer>
    </div>
  );
};

export default CategoryList;
