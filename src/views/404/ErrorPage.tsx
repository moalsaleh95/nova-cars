import React from "react";
import "../../styles/errorpage.css";

const ErrorPage = () => {
  const returnToHome = () => {
    // handle return to homepage
  };

  return (
    <div className="errorMain">
      <div className="errorOops">
        <span>Oops!</span>
      </div>
      <div className="errorPNF">
        <span>404 - Page Not Found</span>
      </div>
      <div className="homePage" onClick={returnToHome}>
        GO TO HOMEPAGE
      </div>
    </div>
  );
};

export default ErrorPage;
