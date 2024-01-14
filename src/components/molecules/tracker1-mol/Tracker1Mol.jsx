import DropDownButton from "../../atoms/tracker1-atom/DropDownButton";
import Tracker1Atom from "../../atoms/tracker1-atom/CardDataTracker1";
import CardDataGlobal from "../../atoms/tracker1-atom/CardDataGlobal";
import "./tracker1Mol.css";
import FetchData from "../../../services/FetchData";
import { useState, useEffect } from "react";
import Map from "../../atoms/tracker1-atom/Map";
import Marks from "../../atoms/tracker1-atom/Marks";

const Tracker1Mol = () => {
  const width = 960;
  const heigth = 500;
  const map = Map();

  const { data: allCountries } = FetchData("countries");
  console.log(allCountries); 
  const [selectedCountry, setSelectedCountry] = useState(null);
  

  useEffect(() => {
    if (allCountries && allCountries.length > 0) {
      setSelectedCountry(allCountries[0]);
    }
  }, [allCountries]);

  const handleCountrySelect = (country) => {
    const selectedCountryData = allCountries.find((c) => c.country === country);
    setSelectedCountry(selectedCountryData);
  };
  return (
    <>
      <div className="container container-tracker1 p-4">
        <div className="row">           
        <div className="dropDown-container d-flex justify-content-between">
          <DropDownButton
            items={
              allCountries ? allCountries.map((country) => country.country) : []
            }
            onSelect={handleCountrySelect}
          />
          <h6>Updated: June 5, 2022</h6>
        </div>
        <div className="container d-flex">
          <div className="row">
            <div className="col-lg-8 d-flex">
            <Tracker1Atom countryData={selectedCountry}/>
          <div className="map">
          <div className="container-button-map">
          <button className="zoom-in-button">+</button>
          <button className="zoom-out-button">-</button>         
          </div>         
            <svg width={width} height={heigth}>
              <Marks mapData={map} />
            </svg>
          </div>
        </div>
          </div>
            </div>
          
        <div className="tracker1-row">
          <CardDataGlobal />
        </div>
      </div>
      </div>
    </>
  );
};

export default Tracker1Mol;