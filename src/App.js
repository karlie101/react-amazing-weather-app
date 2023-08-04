import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return ( 
  <div className="App">
    <div className="container">
   <Weather />
    <footer>
      This project was coded by Karlie Howard and is {" "}
      <a href="https://github.com/karlie101/react-amazing-weather-app"
         target="_blank" rel="noreferrer"
         >
          open-sourced on GitHub
         </a>
    </footer>
    </div>
  </div>  
  );
}


