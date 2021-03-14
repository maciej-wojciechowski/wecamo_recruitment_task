import React from "react";
// Link
import styled from "styled-components";

type Props = {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  fromDate: string;
  toDate: string;
  setFromDate: React.Dispatch<React.SetStateAction<string>>;
  setToDate: React.Dispatch<React.SetStateAction<string>>;
};

const Input: React.FC<Props> = ({
  country,
  setCountry,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}) => {
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCountry(e.target.value);
  };
  const dateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "fromDate") {
      setFromDate(e.target.value);
    } else if (e.target.id === "toDate") {
      setToDate(e.target.value);
    }
  };
  return (
    <StyledInput>
      <div>
        <label htmlFor="select">Country:</label>
        <select name="select" value={country} onChange={selectHandler}>
          <option value="POL">POLAND</option>
          <option value="IND">INDIA</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div>
        <label htmlFor="fromDate">From Date:</label>
        <input
          value={fromDate}
          name="fromDate"
          id="fromDate"
          onChange={dateHandler}
          type="date"
        />
      </div>
      <div>
        <label htmlFor="toDate">To Date:</label>
        <input
          name="toDate"
          value={toDate}
          id="toDate"
          onChange={dateHandler}
          type="date"
        />
      </div>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  box-shadow: 4px -2px 10px -2px rgba(0, 0, 0, 0.6);
  border: solid black 1px;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  width: 25rem;
  border-radius: 5px;
  @media (max-width: 500px) {
    border: none;
    border-radius: none;
    width: 100%;
  }
  div {
    width: 100%;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      flex: 2;
      height: 2rem;
      width: 10rem;
    }
    select {
      width: 10rem;
      height: 2rem;
      flex: 2;
    }
    label {
      flex: 1;
      text-align: center;
    }
  }
`;

export default Input;
