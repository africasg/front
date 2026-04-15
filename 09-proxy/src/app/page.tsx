"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Pagina principal baby</h1>
      <button onClick={()=>{
        document.cookie="legal=true; path=/"
      }}> Soy legal </button>
      <button onClick={()=>{
        document.cookie = "legal=; expires=Thu,01 Jan 1970 00:00:00 UTC; path=/;"
      }}> 
        SOY MACARRA
      </button>
      <Link href={"/importante"}> Ir a importante</Link>
    </div>
  )
}