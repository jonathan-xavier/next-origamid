import CursoClient from "@/components/curso-client"

type IParams = {
    params: {
        slug: string
    }
}

export default async function CursoSlugPage({ params }: IParams) {
    const { slug } = await params
    return (
        <main>
            <CursoClient nome={slug}/>
        </main>
    )
}