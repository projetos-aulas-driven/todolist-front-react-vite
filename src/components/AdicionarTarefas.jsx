import { useState } from "react";

export default function AdicionarTarefas({ tarefas, setTarefas }) {
    const [textoTarefa, setTextoTarefa] = useState("");

    function adicionarTarefa() {
        const novasTarefas = [...tarefas, textoTarefa];
        setTarefas(novasTarefas);
        setTextoTarefa("");
    }

    return (
        <div className="adicionar-tarefa">
            <input
                type="text"
                placeholder="Digite a tarefa..."
                onChange={(e) => setTextoTarefa(e.target.value)}
                value={textoTarefa}
            />
            <button onClick={adicionarTarefa} className="botao-adicionar">+</button>
        </div>
    );
}