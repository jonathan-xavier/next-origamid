"use client"

import { fetchCurso } from "@/api/cursos"
import { useEffect, useState } from "react"


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

type AulaType = {
    nome: string
}

export default function AulaClient({ nome }: AulaType) {
    const [data, setData] = useState<ICurso | undefined>()

    useEffect(() => {
        (async () => {

            const result = await fetchCurso(nome)
            if (result) {
                setData(result)
            }
        })()
    }, [])

    return (
        <main>
            <h2>{data?.nome}</h2>
            <span>{data?.descricao}</span> <br />
            <ul>{data?.aulas.map(item => (
                <li key={`${item.curso_id}_${item.ordem}`}>{item.nome}</li>
            ))}</ul>
            <span>Total de aulas: {data?.total_aulas}</span>
            <span>Total de horas: {data?.total_horas}</span> <br />
        </main>

    )
}