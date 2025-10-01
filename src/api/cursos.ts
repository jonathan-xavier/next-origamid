
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


//criar interface

// {
//   "id": 1,
//   "slug": "introducao-ao-html",
//   "nome": "Introdução ao HTML",
//   "descricao": "Aprenda as bases do HTML",
//   "curso_id": 1,
//   "tempo": 60,
//   "ordem": 1
// }
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

const fetchAula = async (curso: string, aula: string): Promise<ICurso | null> => {
    if(!curso && !aula){
        return null
    }

    try {
        const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
        const data = await response.json() as ICurso
        return data
    } catch (error) {
        console.error(error)
        return null
    }

}

export { fetchCurso , fetchAula }
