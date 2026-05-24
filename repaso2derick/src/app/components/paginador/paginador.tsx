"use client"

import "./paginador.css"
type Props = {
    page:number,
    next:boolean,
    prev:boolean,
    setPage: (page:number) => void
}

export const FuncionPaginacion = ({page,next,prev,setPage}: Props) =>{
    return ( 
        <div className="generalPaginacion">
            <div className="izq">
                <button onClick={(()=>{if(prev){setPage(page-1)}})}> izq </button>
            </div>
            <div className ="numero">{page}</div>
             <div className="der">
                <button onClick={(()=>{if(next){setPage(page+1)}})}> der </button>
            </div>
        </div>
    )

}
