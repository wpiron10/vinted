import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const Publish = ({ token }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("Pull noir à capuche Nike");
  const [description, setDescription] = useState("joli pull de la marque Nike");
  const [brand, setBrand] = useState("Nike");
  const [size, setSize] = useState("XL");
  const [color, setColor] = useState("noir");
  const [condition, setCondition] = useState("Neuf");
  const [location, setLocation] = useState("Paris");
  const [price, setPrice] = useState("29");
  const [exchangeOptin, setExchangeOptin] = useState(false);
  // const [isPictureSending, setIsPictureSending] = useState(false);

  const fetchData = async (event) => {
    event.preventDefault();
    // setIsPictureSending(true);

    const formData = new FormData();
    formData.append("picture", file);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", location);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setIsPictureSending(false);
      alert(JSON.stringify(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="publish-page">
      <div className="container-publish ">
        <form className="publish-form" onSubmit={fetchData}>
          <input
            type="file"
            value={file}
            onChange={(event) => {
              const value = event.target.files[0];

              setFile(value);
            }}
          ></input>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              const value = event.target.value;

              setTitle(value);
            }}
          ></input>
          <input
            type="text"
            value={description}
            onChange={(event) => {
              const value = event.target.value;

              setDescription(value);
            }}
          ></input>
          <input
            type="text"
            value={brand}
            onChange={(event) => {
              const value = event.target.value;

              setBrand(value);
            }}
          ></input>
          <input
            type="text"
            value={size}
            onChange={(event) => {
              const value = event.target.value;

              setSize(value);
            }}
          ></input>
          <input
            type="text"
            value={color}
            onChange={(event) => {
              const value = event.target.value;

              setColor(value);
            }}
          ></input>
          <input
            type="text"
            value={condition}
            onChange={(event) => {
              const value = event.target.value;

              setCondition(value);
            }}
          ></input>
          <input
            type="text"
            value={location}
            onChange={(event) => {
              const value = event.target.value;

              setLocation(value);
            }}
          ></input>
          <input
            type="text"
            value={price}
            onChange={(event) => {
              const value = event.target.value;

              setPrice(value);
            }}
          ></input>
          <input
            type="checkbox"
            value={exchangeOptin}
            onChange={(event) => {
              const value = event.target.value;

              setExchangeOptin(value);
            }}
          ></input>

          <input type="submit" value="Ajouter"></input>
        </form>
      </div>
    </div>
  );
};

export default Publish;
