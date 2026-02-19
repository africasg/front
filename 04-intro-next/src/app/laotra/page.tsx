"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";



const LaOtra= () => {
    const router = useRouter();
    return(
        <div>
            <h1>Esto es la otra página</h1>
            <p onClick={()=>{
                router.back()
            }}>Pa ATRAS</p>
            
             
        </div>
    );
};

export default LaOtra;