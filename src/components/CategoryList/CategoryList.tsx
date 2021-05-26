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
          <CategoryItem>
            <Link href="/web">
              <a>웹</a>
            </Link>
            <img src={web}  className="icon" />
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>앱</a>
            </Link>
            <img src={app}  className="icon" />
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>게임</a>
            </Link>
            <img src={game}  className="icon" />
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>임베디드</a>
            </Link>
            <img src={embedded}  className="icon" />
          </CategoryItem>
        </CategoryContent>
      </CategoryContainer>
    </div>
  );
};

export default CategoryList;
