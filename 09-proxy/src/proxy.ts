import { NextRequest, NextResponse } from "next/server";


export const proxy =(request:NextRequest) => {
    //console.log(request.url)
    const isImportanteRoute =request.nextUrl.pathname.startsWith("/importante")

    // aqui comprobamos si tiene la cooki que se llama es legal 
    const esLegal= request.cookies.get('legal');
    if (isImportanteRoute && !esLegal){
        return NextResponse.redirect(new URL('/',request.url))
        // recomendable generar un objeto de url

    }
    return NextResponse.next();
} 
export const config ={
    marcher : ['/importante/:path*']
}