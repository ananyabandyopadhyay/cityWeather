// import csc  from 'country-state-city';

// console.log(csc.getStatesOfCountry('IN')[0].name)

import React from "react"
import "./style.css"
import Dropdown from "../body/dropdown"
import Weather from "../body/weather"
export default function Header() {
  return (
        <>
        <Dropdown className="root" />
        </>
  );
 }