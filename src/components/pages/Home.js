import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";
import Card from "../Cards";
import CustomModal from "../CustomModal";

const Home = ({ addPlan }) => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    body: "",
    img: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = (title, body, img) => {
    setModalContent({ title, body, img });
    setShow(true);
  };

  const imageUrl = process.env.PUBLIC_URL + "/image"; // 定義圖片路徑的變量

  const cardsData = [
    {
      imageSrc: process.env.PUBLIC_URL + "/image/chest.png",
      title: "胸肌",
      text: "心胸寬闊，有容乃大。",
      onClick: () =>
        handleShow(
          "槓鈴握推",
          "胸肌的王牌動作",
          process.env.PUBLIC_URL + "/image/benchpress.jpg"
        ),
    },
    {
      imageSrc: process.env.PUBLIC_URL + "/image/back.png",
      title: "背部",
      text: "新手練胸，老手練背!",
      onClick: () =>
        handleShow(
          "槓鈴划船",
          "背部的王牌動作",
          process.env.PUBLIC_URL + "/image/barbellrow.jpg"
        ),
    },
    {
      imageSrc: process.env.PUBLIC_URL + "/image/arm.png",
      title: "手臂",
      text: "打造粗壯手臂!",
      onClick: () =>
        handleShow(
          "繩索下壓",
          "手臂的王牌動作",
          process.env.PUBLIC_URL + "/image/triceps.jpg"
        ),
    },
    {
      imageSrc: process.env.PUBLIC_URL + "/image/shoulder.png",
      title: "肩部",
      text: "肩膀要寬才好看",
      onClick: () =>
        handleShow(
          "槓鈴肩推",
          "肩部的王牌動作",
          process.env.PUBLIC_URL + "/image/shoulderpress.jpg"
        ),
    },
    {
      imageSrc: process.env.PUBLIC_URL + "/image/leg.png",
      title: "腿部",
      text: "想要腹肌?那就給我去練腿!",
      onClick: () =>
        handleShow(
          "槓鈴深蹲",
          "腿部的王牌動作",
          process.env.PUBLIC_URL + "/image/squat.jpg"
        ),
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <CustomModal
        show={show}
        handleClose={handleClose}
        title={modalContent.title}
        body={modalContent.body}
        img={modalContent.img}
        handleAddToPlan={(title, sets, reps, weight) => {
          addPlan(title, sets, reps, weight);
          alert("已加入!");
        }}
      />

      <div className="where">
        <h2>今天練哪裡?</h2>
      </div>
    </div>
  );
};

export default Home;
