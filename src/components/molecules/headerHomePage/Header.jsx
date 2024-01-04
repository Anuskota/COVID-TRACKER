import React from 'react'
import "./header.css"
import mobileApp from "../../../assets/img/phones.png"
import timeBrand from "../../../assets/img/b-2.png"
import oceanBrand from "../../../assets/img/b-3.png"
import alberoBrand from "../../../assets/img/b-4.png"
import doraBrand from "../../../assets/img/b-5.png"
import greenTurtleBrand from "../../../assets/img/b-6.png"

const Header = () => {
  return (
    <header>
    <div className="info-header-container">
        <h2>Download the covid app for get latest update</h2>
        <p>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The corona virus COVID-19 is affecting 210 countries & territories arount the world and 2 international conveyances.</p>
        <button>HOW TO PROTECT</button>
    </div>
    <div className="image-header-container">
        <img src={mobileApp} alt="Image of the application displayed on a mobile phone" />
    </div>
    <div className="brand-header-container">
        <div>
            <img src={timeBrand} alt="Time brand" />
        </div>
        <div>
            <img src={oceanBrand} alt="Ocean brand" />
        </div>
        <div>
            <img src={alberoBrand} alt="Albero brand" />
        </div>
        <div>
            <img src={doraBrand} alt="Dora brand" />
        </div>
        <div>
            <img src={greenTurtleBrand} alt="Green Turtle brand" />
        </div>
        <div>
            <img src={timeBrand} alt="Time brand" />
        </div>
    </div>
</header>
  )
}

export default Header