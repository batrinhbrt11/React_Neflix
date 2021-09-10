import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="thriller">thriller</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img
        src="https://c4.wallpaperflare.com/wallpaper/982/869/122/geralt-of-rivia-the-witcher-the-witcher-3-wild-hunt-wallpaper-preview.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://i.pinimg.com/originals/72/64/2d/72642d610981df3881293002d9844300.png"
          alt=""
        />
        <span className="desc">
          How to create React Netflix App UI design for beginners. React UI
          Design course Netflix Clone. React movie website tutorial using hooks.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
