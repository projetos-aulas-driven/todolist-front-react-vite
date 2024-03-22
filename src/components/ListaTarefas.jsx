import { useState } from "react";
import Tarefa from "./Tarefa";

export default function ListaTarefas({ tarefas }) {
    const [terminadas, setTerminadas] = useState([]);

    return (
        <ul className="lista-tarefas">
            {tarefas.map((tarefa, index) => (
                <Tarefa
                    key={index}
                    tarefa={tarefa}
                    tarefas={tarefas}
                    terminadas={terminadas}
                    setTerminadas={setTerminadas}
                />
            ))}
        </ul>
    );
}