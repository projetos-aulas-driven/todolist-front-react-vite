import { useState } from "react";
import styled from "styled-components";

export default function AdicionarTarefas({ tarefas, setTarefas }) {
    const [textoTarefa, setTextoTarefa] = useState("");

    function adicionarTarefa() {
        const novasTarefas = [...tarefas, textoTarefa];
        setTarefas(novasTarefas);
        setTextoTarefa("");
    }

    return (
        <ContainerAdicionar>
            <InputTarefa
                type="text"
                placeholder="Digite a tarefa..."
                onChange={(e) => setTextoTarefa(e.target.value)}
                value={textoTarefa}
            />
            <BotaoAdicionar onClick={adicionarTarefa}>+</BotaoAdicionar>
        </ContainerAdicionar>
    );
}

const ContainerAdicionar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const InputTarefa = styled.input`
    width: calc(100% - 10px);
    padding: 20px;
    border: none;
    background-color: #f3f3f3;
    color: #555;
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    font-size: 18px;
    &::placeholder {
        color: #aaa;
    }
`

const BotaoAdicionar = styled.button`
    background-color: #21c0a8;
    border: none;
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    color: white;
    padding: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: all ease 0.15s;

    &:hover {
        background-color: #56daaf;
    }
`