import { useState } from "react";
import logo from "../images/logo.png";
import AdicionarTarefas from "./AdicionarTarefas";
import ListaTarefas from "./ListaTarefas";
import styled from "styled-components";

export default function ToDoMain() {
    const [tarefas, setTarefas] = useState(["Jogar Lolzinho", "Assistir Narutinho"]);

    return (
        <Conteudo>
            <img src={logo} alt="logo" />
            <AdicionarTarefas tarefas={tarefas} setTarefas={setTarefas}/>
            <ListaTarefas tarefas={tarefas}/>
        </Conteudo>
    )
}

const Conteudo = styled.div`
    max-width: 450px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
    }
`