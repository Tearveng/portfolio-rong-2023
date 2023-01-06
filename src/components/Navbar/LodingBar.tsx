import { useEffect, useRef, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const LoadingBarJsx = () => {
  const [loading, setLoading] = useState(0);

  const handleLoading = () => {
    setLoading((loading) => loading + 5);
  };

  useEffect(() => {
    handleLoading();
  }, [loading]);

  return (
    <div>
      <LoadingBar
        height={3}
        color={
          localStorage.getItem("theme") === "light" ? "#76A9FA" : "#E5E7EB"
        }
        progress={loading}
        onLoaderFinished={() => setLoading(0)}
      />
      <br />
    </div>
  );
};

export default LoadingBarJsx;
