import AulaClient from "@/components/aula-client"

type IParams = {
    params: {
        slug: string[]
    }
}

export default async function AulaPageSlug({params} : IParams) {

    const { slug } = await params
    console.log(slug)
    return (
        <main>
                <AulaClient data={slug}/>
        </main>
    )
}