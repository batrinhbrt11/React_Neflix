import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./listItem.scss";
export default function ListItem({ title, index, fetchUrl }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761?autoPlay=1";

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaRauLQL8ReEW6KdFFQAvarfpqIdazk7_cYQ&usqp=CAU"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">16+</span>
              <span>1999</span>
            </div>
            <div className="desc">
              How to create React Netflix App UI design for beginners. React UI
              Design course Netflix Clone. React movie website tutorial using
              hooks.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
