"use client"

import { fetchAula } from "@/api/cursos"
import { useEffect, useState } from "react"

type IAulaType = {
    data: string[]
}

type IAula = {
    id: number,
    slug: string,
    nome: string,
    curso_id: number,
    tempo: number,
    ordem: number,
}

export default function AulaClient({data}: IAulaType) {
    console.log("aulassss: ", data)
    const [curso, aula] = data
    const [res, setRes] = useState<IAula | null>()

    useEffect(() => {
        (async () => {
            const result = await fetchAula(curso, aula)
            setRes(result)
        })()
    }, [])
    return(
        <main>
            <span>{res?.nome}</span>
        </main>
    )
}