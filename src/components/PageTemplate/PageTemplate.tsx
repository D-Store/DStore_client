import Header from "../Header";
import { PageTemplateContainer } from "./PageTemplate.style";

interface IProps {
  children: React.ReactChild;
}

const PageTemplate: React.FC<IProps> = ({ children }) => {
  return (
    <PageTemplateContainer>
      <Header />
      <div className="PageTemplate-content">{children}</div>
    </PageTemplateContainer>
  );
};

export default PageTemplate;
