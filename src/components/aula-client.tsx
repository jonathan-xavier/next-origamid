"use client"

import { fetchAula } from "@/api/cursos"
import { useEffect, useState } from "react"

type IAulaType = {
    data: string[]
}


type ICurso = {
    id: string,
    slug: string,
    nome: string,
    descricao: string,
    total_aulas: number,
    total_horas: number,
    aulas: IAulas[],
}

type IAulas = {
    curso_id: number,
    descricao: string,
    id: number,
    nome: string,
    ordem: number,
    slug: string,
    tempo: number,
}

export default function AulaClient({data}: IAulaType) {
    console.log("aulassss: ", data)
    const [curso, aula] = data
    const [res, setRes] = useState<ICurso | null>()

    useEffect(() => {
        (async () => {
            const result = await fetchAula(curso, aula)
            setRes(result)
        })()
    }, [])
    return(
        <main>
        
        </main>
    )
}