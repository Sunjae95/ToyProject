import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("init");
  
  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(res=> res.json())
      .then(data=> setData(data.name))
      .catch(error => console.log('에러내용:', error));
  });

  return (
    <div className="App">
      <h1>Hello World! {data}</h1>
    </div>
  );
}
export default App;