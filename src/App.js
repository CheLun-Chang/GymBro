import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import MyPlan from "./components/pages/MyPlan";
import Support from "./components/pages/Support";
import "./App.css";
import { PlanProvider } from "./components/PlanContext";

function App() {
  const [plan, setPlan] = useState([]);

  const addPlan = (name, sets, reps, weight) => {
    setPlan((prevPlan) => [...prevPlan, { name, sets, reps, weight }]);
  };

  const removeLi = (indexToRemove) => {
    const newPlan = plan.filter((item, index) => index !== indexToRemove);
    setPlan(newPlan);
  };

  return (
    <PlanProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home addPlan={addPlan} />} />
              <Route
                path="/myPlan"
                element={
                  <MyPlan plan={plan} removeLi={removeLi} setPlan={setPlan} />
                }
              />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </PlanProvider>
  );
}

export default App;
