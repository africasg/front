'use client'

import { useState } from "react";
import ContainerBackHome from "./components /ContainerBackHome";



const MainPage = () =>{
   const [modal, setModal] = useState<boolean>(false)
  return(
    <div>
      <h1> Nuestra paginita</h1>
      <button onClick={()=>(setModal(true))}>APARECE</button>
      <div onClick={() => setModal(false)}>
      {modal && 
      <ContainerBackHome modal={modal} setModal={setModal}>
        <p>Hola HOLITA</p>
       <div>
          <h1> Esto es un título dentro</h1>
          <p> de dentro </p>
        </div>
      </ContainerBackHome>

      }
    </div>
    </div>
  )
}

export default MainPage;