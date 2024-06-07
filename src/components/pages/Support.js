import React from "react";
import "./styles/Support.css";

const videoData = [
  { id: "ya2QgoBfRAk", text: "槓鈴握推" },
  { id: "SkCDB-EtV7o", text: "槓鈴划船" },
  { id: "gM53QKOuZPI", text: "三頭下壓" },
  { id: "pNOlT5gLo3I", text: "槓鈴肩推" },
  { id: "oVk4DEn9THE", text: "槓鈴深蹲" },
];

const Support = () => {
  return (
    <div className="support-container">
      <header>
        <h3>忘記動作了嗎?</h3>
      </header>
      <div className="videos">
        {videoData.map((video, index) => (
          <div className="video-container" key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={`Video ${index + 1}`}
              className="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="overlay">{video.text}</div>
          </div>
        ))}

        <a
          href="https://www.youtube.com/@ALEX-Fitness"
          target="_blank"
          rel="noreferrer"
          className="alex"
        >
          <p>影片來源:澳洲健身ALEX</p>
        </a>
      </div>
    </div>
  );
};

export default Support;
