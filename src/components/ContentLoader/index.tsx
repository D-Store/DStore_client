import ContentLoader from "react-content-loader";
import pallete from "utils/pallete";

const ContentLoaderComponent = () => {
  return (
    <>
      <ContentLoader
        viewBox="0 0 1280 1000"
        backgroundOpacity={0.8}
        speed={1}
        backgroundColor={"#222"}
        foregroundColor={pallete.input_back}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="270" />
        <rect x="0" y="0" rx="3" ry="4" width="100%" height="270" />
      </ContentLoader>
    </>
  );
};
export default ContentLoaderComponent;
