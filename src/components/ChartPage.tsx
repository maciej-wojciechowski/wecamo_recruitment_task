import React from "react";
import { Link } from "react-router-dom";
import Chart from "./Chart";
import styled from "styled-components";

type Props = {
  data: any;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  oldCounter: React.MutableRefObject<number>;
};

const ChartPage: React.FC<Props> = ({
  data,
  counter,
  setCounter,
  oldCounter,
}) => {
  return (
    <StyledChartPage>
      <StyledChart>{data ? <Chart data={data} /> : "No Data :("}</StyledChart>
      <div className="buttons-container">
        <button
          onClick={() => {
            oldCounter.current = counter;
            setCounter((counter -= 1));
          }}>
          Previous Month
        </button>
        <Link to="/">
          <button>Back to Input</button>
        </Link>
        <button
          onClick={() => {
            oldCounter.current = counter;
            setCounter((counter += 1));
          }}>
          Next Month
        </button>
      </div>
    </StyledChartPage>
  );
};

const StyledChartPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  .buttons-container {
    margin: 1rem 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    .buttons-container {
      button {
        margin: 0.3rem;
        width: auto;
        padding: 0.3rem;
        font-size: smaller;
      }
    }
  }
`;

const StyledChart = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default ChartPage;
