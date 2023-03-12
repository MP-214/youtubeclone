import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen=useSelector((state)=>state.app.isMenuOpen)
  if(!isMenuOpen){
    return null
  }
  return (
    <div className="m-5  pl-5 h-[100vh] pr-[7.5rem] border border-gray-100 overflow-y-scroll">
      <ul className="font-bold py-2">
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className="font-bold py-2">
        <li>Library</li>
        <li>History</li>
        <li>Your videos</li>
      </ul>
      <hr></hr>
      <ul className="font-bold py-2">
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className="font-bold py-2 ">
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className="font-bold py-2 ">
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className="font-bold py-2 ">
        <li>Watch Later</li>
        <li>Liked videos</li>
        <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className='font-bold py-2 '>
      <li >Watch Later</li>
      <li>Liked videos</li>
      <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className='font-bold py-2 '>
      <li >Watch Later</li>
      <li>Liked videos</li>
      <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className='font-bold py-2 '>
      <li >Watch Later</li>
      <li>Liked videos</li>
      <li>Subscription</li>
      </ul>
      <hr></hr>
      <ul className='font-bold py-2 '>
      <li >Watch Later</li>
      <li>Liked videos</li>
      <li>Subscription</li>
      </ul>
     
    </div>
  );
};

export default Sidebar;
