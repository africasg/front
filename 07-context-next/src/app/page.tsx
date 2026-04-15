'use client'


import { useRouter } from "next/navigation";
import { useLista } from "@/context/ListaContext";

export const Home= ()=> {
const {lista }= useLista();
const router = useRouter()
return(
  <div className={"styles.page"}>

  <button onClick={()=>{
    router.push("/addToList");
  }}
  > Go to add lista page 
  </button> 
  {lista.map((e)=>(
    <p key={e}>{e}</p>
  ))}
  </div>
);
}
export default Home;