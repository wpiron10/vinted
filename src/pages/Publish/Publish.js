import "./Publish.css";
import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import Dropzone from "react-dropzone";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("Chaussures noir  Nike");
  const [description, setDescription] = useState(
    "jolies shoes de la marque Nike"
  );
  const [brand, setBrand] = useState("Nike");
  const [size, setSize] = useState(43);
  const [color, setColor] = useState("noir");
  const [condition, setCondition] = useState("Neuf");
  const [location, setLocation] = useState("Paris");
  const [price, setPrice] = useState(29);
  const [exchangeOptin, setExchangeOptin] = useState(false);

  const [data, setData] = useState(null);

  const navigate = useNavigate();

  const fetchData = async (event) => {
    event.preventDefault();
    // setIsPictureSending(true);

    const formData = new FormData();
    formData.append("picture", picture);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", location);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);

    try {
      console.log(token, "< token");
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setIsPictureSending(false);
      console.log(response.data);
      setData(response.data);

      navigate("/offer/" + response.data._id);

      // alert(JSON.stringify(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  return token ? (
    <div className="publish-page">
      <div className="container-publish ">
        <form className="publish-form" onSubmit={fetchData}>
          <input
            type="file"
            onChange={(event) => {
              const value = event.target.files[0];

              setPicture(value);
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
          ></input>{" "}
          <span>Je suis intéressé(e) par les échanges</span>
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
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
