import React, { createContext, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  return <RoomContext value={{rooms}}>{children}</RoomContext>;
};

export default RoomProvider;
