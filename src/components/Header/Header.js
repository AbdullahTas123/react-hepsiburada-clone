import React from "react";
import "./Header.css"

// Logo, arama, giriş ve sepet kısmının bulunduğu alan
function TopHeader ({filterText, setFilterText}) {
  
  const handleOnSubmit = e => {
    e.preventDefault();
  }

  const handleOnChange = e => {
    setFilterText(e.target.value);
  }
  
  return (
    <div className="top-header">
        <div className="top-header-container">
          <h1 className="top-header-logo">Hepsi Şurada</h1>
          <div className="top-header-search-container">
            <form onSubmit={handleOnSubmit}>
              <input 
                type="text" 
                placeholder="Arama yap..."
                value={filterText}
                onChange={handleOnChange} />
              <button type="submit">Ara</button>
            </form>
          </div>
          <div className="top-header-login-cart">
            <div className="top-header-login">
              <a href="#">Giriş Yap</a>
            </div>
            <div className="top-header-cart">
              <a href="#">Sepetim</a>
            </div>
          </div>
        </div>
        <div className="top-header-colorful">
          <div className="color1"></div>
          <div className="color2"></div>
          <div className="color3"></div>
          <div className="color4"></div>
        </div>   
    </div>
  )
}

// Linklerin yer aldığı alan
function BotHeader () {
  return (
    <div className="bot-header">
      <div className="bot-header-menu">
        <a href="#Elektronik">Elektronik</a>
        <a href="#Moda">Moda</a>
        <a href="#Ev">Ev, Yaşam, Kırtasiye, Ofis</a>
        <a href="#Oto">Oto, Bahçe</a>
        <a href="#Anne">Anne, Bebek</a>
        <a href="#Spor">Spor, OutDoor</a>
        <a href="#Kozmetik">Kozmetik</a>
      </div>
    </div>
  )
}


export default function Header ({filterText, setFilterText}) {
  return (
    <div className="header">
      <TopHeader 
        filterText={filterText}
        setFilterText={setFilterText}
      />

      <BotHeader />
    </div>
  )
}