"use client";
import { useRouter } from "next/navigation";
import "./ContainerBackHome.css"
import React from "react";
type Props= {
    children : React.ReactNode;
    modal : boolean;
    setModal : React.Dispatch<React.SetStateAction<boolean>>
}

const ContainerBackHome = ({children,modal,setModal}:Props) =>{
     const router = useRouter()
    return(
        <div className="container"
        onClick={(e)=>{
            setModal(false)
        }}>
            <div className="innerContainer" onClick={(e)=>e.stopPropagation()}>
            {children}
            </div>
        </div>
    )
}

export default ContainerBackHome;