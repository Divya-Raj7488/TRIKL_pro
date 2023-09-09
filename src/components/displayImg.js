import React, { useEffect, useState } from "react";
import "../styles/container.css";
import MovingText from "./movableBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function DisplayImg() {
  const [search, setSearch] = useState("");
  const [Data, setData] = useState([]);
  const [firstUrl, setFirstUrl] = useState("");
  const [Toggle, setToggle] = useState(true);

  const randomImg = async () => {
    try {
      const randomImg = await axios.get("https://source.unsplash.com/random");
      setFirstUrl(randomImg.config.url);
    } catch (err) {
      console.log(err);
    }
  };
  const FetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`
      );
      setData(response.data);
      console.log(Data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    randomImg();
    FetchData();
  });

  return (
    <div className="imgContainer">
      <section className="searchBoxContainer">
        <div className="searchBar">
          <input type="text" value={search} />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{
              width: "1.6rem",
              height: "1.8rem",
              marginLeft: "-2.5rem",
              paddingLeft: "0.35rem",
              borderLeft: "2px solid grey",
            }}
            onClick={() => {
              setSearch(search);
            }}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{
              width: "1.6rem",
              height: "1.8rem",
              marginLeft: "2.5rem",
            }}
            onClick={() => setToggle(!Toggle)}
          />
        </div>
        <section className={Toggle ? "toggleContainer" : "hide"}>
          {Data &&
            Data.map((property) => {
              return (
                <div className="categorisedImage" key={property.id} onClick={() => setFirstUrl(property.urls.raw)}>
                  <img
                    src={property.urls.raw}
                    width={200}
                    height={150}
                    style={{
                      border: "1px solid grey",
                      borderRadius: "1rem",
                    }}
                    alt="random images"
                  />
                </div>
              );
            })}
        </section>
      </section>
      <section>
        <div className="movingImg">
          <img
            src={
              firstUrl === ""
                ? "https://plus.unsplash.com/premium_photo-1673254848156-09d3822b5b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                : firstUrl
            }
            alt="hello there"
            style={{
              width: "100vw",
              height: "90vh",
              position: "absolute",
              borderRadius: "1rem",
            }}
          />
          <MovingText />
        </div>
      </section>
    </div>
  );
}
