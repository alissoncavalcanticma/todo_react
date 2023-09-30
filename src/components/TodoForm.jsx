import {useState} from "react";

const TodoForm = ({addTodo}) => {
    
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");
    

    //função para tratar o envio do form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value, category);

        //Prevenir preenchimento nulo do form
        if(!value || !category) return;

        //Criar função de adicionar Todo
        addTodo(value, category);
        //Limpar campos do Form
        setValue("");
        setCategory("");
    }

    return(
        <div className="todo-form">
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} placeholder="Digite um título" onChange={(e) => setValue(e.target.value)}/>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma opção</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm