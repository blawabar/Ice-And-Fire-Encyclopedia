import React from "react";
import { useParams } from "react-router-dom";
import { ErrorInfo } from "../../components/ErrorInfo";
import { HouseDetailsList } from "../../components/HouseDetailsList";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { NavigationButton } from "../../components/NavigationButton";
import { ROOT_URL } from "../../data/constants";
import { HouseIdParam } from "../../data/types/house-types";
import { useHouseFetcher } from "../../hooks";
import "./HousePage.scss";

const HousePage: React.FC = () => {
  const { houseId } = useParams<HouseIdParam>();
  const { isLoading, data, error } = useHouseFetcher(houseId);

  let pageContent = null;

  if (error) {
    pageContent = <ErrorInfo errorMsg={error} />;
  } else if (isLoading) {
    pageContent = <LoadingIndicator resourceName="house" />;
  } else if (data) {
    const { name } = data;

    pageContent = (
      <div className="house-page">
        <NavigationButton linkText="Back To Characters" link={ROOT_URL} />
        <h2 className="house-page__name">{name}</h2>
        <HouseDetailsList houseData={data} />
      </div>
    );
  }

  return pageContent;
};

export default HousePage;
