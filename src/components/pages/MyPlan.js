import React from "react";
import "./styles/MyPlan.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MyPlan = ({ plan, setPlan }) => {
  const removeLi = (indexToRemove) => {
    const newPlan = plan.filter((item, index) => index !== indexToRemove);
    setPlan(newPlan);
  };

  return (
    <div className="myPlan">
      <h3>我的計畫</h3>
      <ul>
        {plan.map((item, index) => (
          <li key={index}>
            {item.name} -{item.weight} KG x {item.reps} 下 x {item.sets} 組
            <i
              className="fas fa-trash-alt"
              style={{ cursor: "pointer", marginLeft: "100px" }}
              onClick={() => removeLi(index)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPlan;
