
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

const fetchCurso = async (curso: string): Promise<ICurso | null> => {
    if (!curso) {
        return null
    }
    try {
        const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
        const data = await response.json() as ICurso
        return data
    } catch (error) {
        console.error(error)
        return null
    }
}

export { fetchCurso }
