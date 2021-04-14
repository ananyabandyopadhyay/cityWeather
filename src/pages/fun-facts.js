import React from "react"
import Header from "../components/header"
import Fun from "../components/funs"
import Footer from "../components/footer/index"

import "./Global.css"

export default function Funfacts() {
  return (
<div className="root">
   <Header />
    <Fun />
    <Footer />
  </div>
  );
}