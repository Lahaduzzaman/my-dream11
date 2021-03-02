import React from "react";
import "./PlayerSelect.css";

const PlayerSelect = (props) => {
  const selectPlayer = props.selectPlayer;
  const totalSalary = selectPlayer.reduce(
    (sum, totalSalary) => sum + totalSalary.salary,
    0
  );

  return (
    <div>
      <h4>Select Player: {selectPlayer.length}</h4>
      <h4>Total Salary: ${totalSalary}</h4>
      <div></div>
    </div>
  );
};

export default PlayerSelect;
