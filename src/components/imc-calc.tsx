"use client"


import { useState } from "react"
export default function ImcCalc() {

    const [height, setHeigh] = useState<number>()
    const [weight, setWeight] = useState<number>()
    const [result, setResult] = useState<number>()


    const calculateImc = () => {
        if(!height && !weight){
            return null
        }

        if (height) {
            const base = height * height;
            const total = (weight ?? 0) / base

            setResult(Number(total.toFixed(2)))
        }
    }

    return (
        <main>
            <h2>Calcular Imc</h2>
            <input type="number" placeholder="altura"
                onChange={(e) => setHeigh(Number(e.target.value))} />

            <input type="number" placeholder="peso"
                onChange={(e) => setWeight(Number(e.target.value))} />

            <button onClick={calculateImc}>calcular</button>

            <span>Resultado IMC: {result}</span>

        </main>
    )
}