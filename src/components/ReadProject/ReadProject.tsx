import React from "react";
import { setUrl } from "../../lib/setUrl";
import { ProjectType } from "../../types/project";
import ReadProjectCard from "../ReadProjectCard";
import ReadProjectContent from "../ReadProjectContent";

const ReadProject: React.FC = () => {
  return (
    <div>
      <ReadProjectCard />
      <ReadProjectContent />
    </div>
  );
};

export default ReadProject;
