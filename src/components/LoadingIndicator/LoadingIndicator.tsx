import React from "react";
import "./LoadingIndicator.scss";

type Props = { resourceName: string };

const LoadingIndicator: React.FC<Props> = ({ resourceName }) => {
  return (
    <h3 className="loading-indicator">{`Loading ${resourceName} data...`}</h3>
  );
};

export default LoadingIndicator;
