import { AcUnit } from "@material-ui/icons";
import React from "react";
import Featured from "../../Component/Featured/Featured";
import List from "../../Component/List/List";

import Navbar from "../../Component/Navbar/Navbar";
import "./Home.scss";
import request from "../../request";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List
        title="NETFLIX ORIGINAlS"
        fetchUrl={request.fetchNetflixOriginals}
      />
      <List title="Top Rated" />
      <List title="Movies" />
      <List title="TV Series" />
    </div>
  );
}

export default Home;
