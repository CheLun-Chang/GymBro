import React, { createContext, useState } from "react";

export const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([]);

  const addPlan = (name, sets, reps) => {
    setPlan([...plan, { name, sets, reps }]);
  };

  return (
    <PlanContext.Provider value={{ plan, addPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
