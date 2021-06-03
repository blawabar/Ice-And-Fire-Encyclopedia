import React from "react";
import { Link } from "react-router-dom";

import "./NavigationButton.scss";

type NavigationButtonProps = {
  linkText: string;
  link: string;
};

const NavigationButton: React.FC<NavigationButtonProps> = ({
  link,
  linkText,
}) => {
  return (
    <Link to={link} className="nav-btn">
      {linkText}
    </Link>
  );
};

export default NavigationButton;
