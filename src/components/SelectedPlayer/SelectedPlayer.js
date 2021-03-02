import React from "react";
import "./SelectedPlayer.css";


const SelectedPlayer = (props) => {
  const select = props.select;
  return (
    <div className="playerSelect">
      <img src={select.image} alt="" />
      <h5>Name : {select.name}</h5>
      <h5>Club: {select.club}</h5>
      <h5>Salary: ${select.salary}</h5>
    </div>
  );
};

export default SelectedPlayer;
