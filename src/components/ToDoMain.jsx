import { useState } from "react";
import logo from "../images/logo.png";
import AdicionarTarefas from "./AdicionarTarefas";
import ListaTarefas from "./ListaTarefas";

export default function ToDoMain() {
    const [tarefas, setTarefas] = useState(["Jogar Lolzinho", "Assistir Narutinho"]);

    return (
        <div className="conteudo">
            <img src={logo} alt="logo" />
            <AdicionarTarefas tarefas={tarefas} setTarefas={setTarefas}/>
            <ListaTarefas tarefas={tarefas}/>
        </div>
    )
}