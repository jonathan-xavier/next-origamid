type IProduct = {
    id: string,
    descricao: string,
    estoque: number,
    importado: number,
    nome: string,
    preco: number,
}

export default async function ServerFetch() {
    const api = 'https://api.origamid.online/produtos'
    const response = await fetch(api)
    const data = await response.json() as IProduct[]

    console.log(data)
    return (
        <ul>
            {data.map((item) => <li key={item.id}>{item.nome}</li>)}
        </ul>
    )
}