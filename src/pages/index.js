import React from "react"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import Body from "../components/body/index"
import "./Global.css"
export default function Home() {
  return <div className="root">
    <Header/>
    <Body />
    <Footer />
    </div>
}
