import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ErrorInfo } from "../../components/ErrorInfo";
import { HouseDetailsList } from "../../components/HouseDetailsList";
import { LoadingIndicator } from "../../components/LoadingIndicator";
import { NavigationButton } from "../../components/NavigationButton";
import { ROOT_URL } from "../../data/constants";
import { HouseIdParam } from "../../data/types/house-types";
import { resetHouseState } from "../../data/house-details-slice";
import { useHouseFetcher } from "../../hooks";
import "./HousePage.scss";

const HousePage: React.FC = () => {
  const dispatch = useDispatch();
  const { houseId } = useParams<HouseIdParam>();
  const { isLoading, houseData, error } = useHouseFetcher(houseId);

  const handleOnGoBack = () => dispatch(resetHouseState());

  let pageContent = null;

  if (error) {
    pageContent = <ErrorInfo errorMsg={error} />;
  } else if (isLoading) {
    pageContent = <LoadingIndicator resourceName="house" />;
  } else if (houseData) {
    const { name } = houseData;

    pageContent = (
      <div className="house-page">
        <NavigationButton
          linkText="Back To Characters"
          link={ROOT_URL}
          onClick={handleOnGoBack}
        />
        <h2 className="house-page__name">{name}</h2>
        <HouseDetailsList houseData={houseData} />
      </div>
    );
  }

  return pageContent;
};

export default HousePage;
