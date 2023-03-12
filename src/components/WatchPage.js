import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {closeMenu} from "../utils/appSlice"
import Comment from './Comment'
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searcParams]=useSearchParams()
  const dispatch=useDispatch()
  useEffect(()=>{
  dispatch(closeMenu())
  },[])
  return (
    <div className="flex flex-col m-5">
    <div className="flex w-full">
    <div className="">
      <iframe
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/"+searcParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      </div>
      <div>
    <LiveChat/>
      </div>
      </div>
     <Comment/>
    </div>
  );
};

export default WatchPage;
