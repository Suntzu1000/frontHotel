import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { RoomContext } from "../context/RoomContext";

const list = [
  { name: "0 Crianças" },
  { name: "1 Criança" },
  { name: "2 Crianças" },
  { name: "3 Crianças" },
  { name: "4+ Crianças" },
];

const KidsDropdown = () => {
  const {kids, setKids} = useContext(RoomContext)
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 text-black ">
       {kids === '0 Crianças' ? 'Sem Crianças': kids }
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40 "
      >
        {list.map((li, index) => {
          return (
            <Menu.Item
            onClick={() => setKids(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer text-black "
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
