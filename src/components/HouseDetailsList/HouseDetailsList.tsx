import React from "react";
import { HOUSE_DETAILS_DICTIONARY } from "../../data/constants";
import { House, HouseDetailsDictionary } from "../../data/types/house-types";
import "./HouseDetailsList.scss";

type Props = {
  houseData: House;
};

const getPropertyValue = (propertyName: string, houseData: House) => {
  const propertyValue = houseData[propertyName];

  switch (propertyName) {
    case "titles":
    case "seats":
      return Boolean(propertyValue.length > 1)
        ? (propertyValue as Array<string>).join(", ")
        : "Unknown";
    case "overlord":
      return Boolean(propertyValue) ? "Yes" : "No";
    case "diedOut":
      return Boolean(propertyValue) ? propertyValue : "No";
    case "cadetBranches":
      return propertyValue.length;
    default:
      return Boolean(propertyValue) ? propertyValue : "Unknown";
  }
};

const renderListItems = (
  houseDetailsDictionary: HouseDetailsDictionary,
  houseData: House,
) => {
  const houseDetailsKeys = Object.keys(houseDetailsDictionary);

  return Object.entries(houseData).map(([propertyName]) => {
    if (houseDetailsKeys.includes(propertyName)) {
      const propertyTitle = HOUSE_DETAILS_DICTIONARY[propertyName];
      const propertyValue = getPropertyValue(propertyName, houseData);

      return (
        <li key={propertyName}>
          <span>{`${propertyTitle}: `}</span>
          {propertyValue}
        </li>
      );
    }

    return null;
  });
};

const HouseDetailsList: React.FC<Props> = ({ houseData }) => {
  return (
    <ul className="house-details-list">
      {renderListItems(HOUSE_DETAILS_DICTIONARY, houseData)}
    </ul>
  );
};

export default HouseDetailsList;
