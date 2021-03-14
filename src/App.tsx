import React, { useState, useEffect, useRef } from "react";
//Components
import Input from "./components/Input";
import ChartPage from "./components/ChartPage";
// Link
import { Link } from "react-router-dom";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
// Styled components
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
// Month changing function
import monthChange from "./MonthChange";

function App() {
  const location = useLocation();
  const [country, setCountry] = useState("POL");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState({} || null);
  const [counter, setCounter] = useState(0);
  const oldCounter = useRef(0);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://covidapi.info/api/v1/country/${country}/timeseries/${fromDate}/${toDate}`
      );
      const responseJSON = await response.json();
      setData(responseJSON.result);
    } catch {
      setData(null);
    }
  };
  /* eslint-disable */
  useEffect(() => {
    monthChange(fromDate, toDate, counter, oldCounter, setFromDate, setToDate);
  }, [counter]);

  useEffect(() => {
    getData();
  }, [toDate, fromDate]);
  /* eslint-disable */

  return (
    <div className="App">
      <GlobalStyle />
      <StyledHome>
        <div className="logo">
          <Link id="logo" to="/">
            <h1>Covid App</h1>
          </Link>
        </div>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Input
              country={country}
              setCountry={setCountry}
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
            />
            <Link to="/chart">
              <button onClick={() => getData()}>SHOW</button>
            </Link>
          </Route>
          <Route path="/chart" exact>
            <ChartPage
              data={data}
              counter={counter}
              setCounter={setCounter}
              oldCounter={oldCounter}
            />
          </Route>
        </Switch>
      </StyledHome>
    </div>
  );
}

const StyledHome = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  .logo {
    margin: 1rem;
    height: 3rem;
    h1 {
      font-weight: 900;
      text-decoration: none;
      color: black;
    }
  }
  button {
    margin: 1rem;
    background: #a0a7ff;
    cursor: pointer;
    height: 3rem;
    width: 10rem;
    border-radius: 5px;
    transition: 0.5s ease;
  }
`;

export default App;
