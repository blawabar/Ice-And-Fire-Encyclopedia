import React from "react";
import { Link } from "react-router-dom";

import "./NavigationButton.scss";

type NavigationButtonProps = {
  linkText: string;
  link: string;
  onClick: () => void;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  link,
  linkText,
  onClick,
}) => {
  return (
    <Link to={link} className="nav-btn" onClick={onClick}>
      {linkText}
    </Link>
  );
};

export default NavigationButton;
