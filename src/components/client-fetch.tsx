"use client"

import { useEffect, useState } from "react"

type IProduct = {
    id: number,
    nome: string,
}

export default function ClientFetch() {

    const [data, setData] = useState<IProduct[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.origamid.online/produtos')
            const json = await response.json() as IProduct[]
            setData(json)
        }

        fetchData()
    }, [])
    return(
        <ul>
           {data.map(item => (
            <li key={item.id}>{item.nome}</li>
           ))}
        </ul>
    )

}