import React from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import ReadProjectCard from "../ReadProjectCard";
import ReadProjectContent from "../ReadProjectContent";
import ReadProjectReview from "../ReadProjectReview";

const ReadProject: React.FC = () => {
  return (
    <div>
      <ReadProjectCard />
      <ReadProjectContent />
      <ReadProjectReview />
    </div>
  );
};

export default ReadProject;
