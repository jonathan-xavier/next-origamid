import { fetchCurso } from "@/api/cursos"
import AulaClient from "@/components/aula-client"

type IParams = {
    params: {
        slug: string
    }
}

export default async function CursoSlugPage({ params }: IParams) {
   
    return (
        <main>
            <AulaClient nome={params.slug}/>
        </main>
    )
}