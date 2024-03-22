import styled from "styled-components";

export default function Tarefa({tarefas, tarefa, terminadas, setTerminadas}) {

    function terminarTarefa(tarefaTerminada) {
        const novoArray = [...terminadas, tarefaTerminada];
        setTerminadas(novoArray);

        if (tarefas.length - novoArray.length > 0) {
            alert(`Agora só faltam ${tarefas.length - novoArray.length} tarefas! Uhuul!`);
        } else {
            alert("Você terminou tudo, parabéns!");
        }
    }

    return (
        <ItemLista
            onClick={() => terminarTarefa(tarefa)}
            finalizada={terminadas.includes(tarefa)}
        >
            <ion-icon name={terminadas.includes(tarefa) ? "checkmark-circle" : "ellipse-outline"}></ion-icon>
            {tarefa}
        </ItemLista>
    );
}

const ItemLista = styled.li`
    color: ${props => props.finalizada ? "#aaaaaa" : "#303f4e"};
    text-decoration: ${props => props.finalizada ? "line-through" : ""};
    padding: 22px;
    display: flex;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    background-color: #f3f3f3;
    &:hover {
        color: #21c0a8;
    }
    &:not(:last-child) {
        border-bottom: 1px solid #e7e7e7;
    }
    ion-icon {
        flex-shrink: 0;
        font-size: 40px;
        margin-right: 16px;
        ${props => props.finalizada ? "#78dbad" : "#303f4e"};
    }
    &:hover ion-icon {
        color: #21c0a8;
    }
`