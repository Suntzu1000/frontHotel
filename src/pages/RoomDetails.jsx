import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import AdultsDropdown from "../components/AdultsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import ScrollToTop from "../components/ScrollToTop";
import KidsDropdown from "../components/KidsDropdown";
import { RoomContext } from "../context/RoomContext";
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { id } = useParams();
  console.log(id);

  return <div className="bg-pink-200">RoomDetails</div>;
};

export default RoomDetails;
