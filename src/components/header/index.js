import React from "react"
import Link from 'gatsby-link'
import "./style.css"
export default function Header() {
  return (
    <>
    <div className="header">
    <Link to="/" className="link">Home</Link>{" "}
    <Link to="/fun-facts" className="link">fun facts</Link>
    </div>
    <hr/>
  </>
  );
}