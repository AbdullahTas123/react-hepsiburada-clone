import React from "react";
import "./Header.css"


export default function Header () {
  return (
    <div className="header">
      <div className="header-container">
        <h1>Hepsi Şurada</h1>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>
      </div>
    </div>
  )
}