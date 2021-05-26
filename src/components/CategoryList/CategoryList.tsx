import React from "react";
import Link from "next/link";
import { CategoryContainer, CategoryContent, CategoryItem } from "./CategoryList.style";
// const web = require("../../public/image/Category_web.png")
// import web from "../../public/image/Category_web.png";
// import app from "../../public/png/Category_app.png";
// import game from "../../public/png/Category_game.png";
// import embedded from "../../public/png/Category_embedded.png";


const CategoryList: React.FC = () => {
  return (
    <div>
      <CategoryContainer>
        <CategoryContent>
          <CategoryItem>
            <Link href="/web">
              <a>웹</a>
            </Link>
            <img src={web}/>
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>앱</a>
            </Link>
            {/* <App classname="icon" /> */}
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>게임</a>
            </Link>
            {/* <Game classname="icon" /> */}
          </CategoryItem>
          <CategoryItem>
            <Link href="/web">
              <a>임베디드</a>
            </Link>
            {/* <Embedded classname="icon" /> */}
          </CategoryItem>
        </CategoryContent>
      </CategoryContainer>
    </div>
  );
};

export default CategoryList;
