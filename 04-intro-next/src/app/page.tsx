
"use client";
// cuando haya interacción, necesitamos que sea en el componente más pequeño posible
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
  
  const router = useRouter();
  // Hook: funcion que actua en el cliente: useState,useEffect
  return (
    <div>
      <Link href="/laotra/27">La otra 27</Link>
     <h1>Hola mundillo</h1>
     {/* pasar a la siguiente pagina */}
     <Link href="/laotra">Si pinchas aquí, te lleva a la otra</Link>
      <img src = "rick_morty.jpg" onClick={()=>{
        router.push("/laotra");
        // existe .replace, que elimina el historial (pasarelas de pago por ejemplo)
      }}
      />
    </div>
  );
};
export default Home;