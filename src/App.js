import react from "react";
import Weather from "./Weather";


import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <h1>
Hello react
       </h1>
        <Weather city ="Oslo" />
 
      </header>
    </div>
  );
}

export default App;
