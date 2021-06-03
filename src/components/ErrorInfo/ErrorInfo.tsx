import React from "react";
import "./ErrorInfo.scss";

type Props = {
  errorMsg: string;
};

const ErrorInfo: React.FC<Props> = ({ errorMsg }) => {
  return (
    <div className="error-info">
      <h3 className="error-info__title">Something went wrong...</h3>
      <p className="error-info__message">{errorMsg}</p>
    </div>
  );
};

export default ErrorInfo;
