import { useState } from "react";
import Tarefa from "./Tarefa";
import styled from "styled-components";

export default function ListaTarefas({ tarefas }) {
    const [terminadas, setTerminadas] = useState([]);

    return (
        <Lista>
            {tarefas.map((tarefa, index) => (
                <Tarefa
                    key={index}
                    tarefa={tarefa}
                    tarefas={tarefas}
                    terminadas={terminadas}
                    setTerminadas={setTerminadas}
                />
            ))}
        </Lista>
    );
}

const Lista = styled.ul`
    display: flex;
    flex-direction: column;
    border-radius: 9px;
    overflow: hidden;
`