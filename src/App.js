import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from "characters";
import styled from "styled-components";
import axios from 'axios';
import { BASE_URL, API_KEY } from "./components/Constants";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ characters, setCharacters ] = useState( [] );

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get( `${BASE_URL}/api/${API_KEY}/` )
      .then(( res ) => {
        setCharacters( res.data.results )
      })
      .catch(( err ) => {
        console.log( err, "Commander, we got problems" )
      })
  });

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
