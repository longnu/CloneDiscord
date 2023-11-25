'use client'

import { Canvas } from "@react-three/fiber";
import { Experience } from "../three/Experience.jsx";
import { Fragment, useRef, ElementRef, useState } from "react";

import {MetaverseUi} from "./metaverseui.jsx"

export const ChatAvatar = (

) => {
  return (    
    <>
  <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
    <color attach="background" args={["#ececec"]} />
    <Experience />
  </Canvas>
  <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '5%' }}>
    <MetaverseUi />
  </div>
</>
)
}