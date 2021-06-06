import React from "react";
import { MyInfoCardContainer } from "./MyInfoCard.style";

interface IProps {
  name: string;
  profile: string;
}

const MyInfoCard: React.FC<IProps> = ({ name, profile }) => {
  return (
    <MyInfoCardContainer>
      <div className="background">
        <img src={profile} alt={`${name}'s profile`} />
      </div>
      <h1>{name}</h1>
    </MyInfoCardContainer>
  );
};

export default MyInfoCard;
