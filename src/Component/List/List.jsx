import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
  ContactSupportOutlined,
} from "@material-ui/icons";
import React, { useRef, useState, useEffect } from "react";
import ListItem from "../listItem/ListItem";

import "./List.scss";
import axios from "../../axios";

export default function List({ title, fetchUrl }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef();
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50; // sửa lỗi distance lúc ấn nhanh
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${235 + distance}px)`;
    }

    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-235 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="list_title">{title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
/*<ListItem index={0} />
<ListItem index={1} />
<ListItem index={2} />
<ListItem index={3} />
<ListItem index={4} />
<ListItem index={5} />
<ListItem index={6} />
<ListItem index={7} />
<ListItem index={8} />
<ListItem index={9} />*/
