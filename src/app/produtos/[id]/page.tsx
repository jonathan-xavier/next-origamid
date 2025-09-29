type IParams = {
    params: {
        id:string
    }
}

type IProductById = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: number;
}

export default async function ProdutosIdPage({params} : IParams){
    const response = await fetch(`https://api.origamid.online/produtos/${params.id}`)
    const data = await response.json() as IProductById
    return (
        <div>
            <h2>Itens vindo de uma api</h2>
            <h3>nome: {data.nome}</h3>
            <h3>preco: {data.preco}</h3>
            <span>Descricao do produto: {data.descricao}</span>
        </div> 
    )
}