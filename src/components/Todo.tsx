import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cateTest, IToDo, selectOption, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const cateTests = useRecoilValue(cateTest);
    const categoryId = useRecoilValue(selectOption);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
        currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        const newToDo = { text, id, category: name as any };
        return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
        ];
    });
    };
    return (
    <li>
        <span>{text}</span>
        {cateTests?.filter((cates)=>(
            cates.label !== categoryId
        )).map(cates => (
            <button key={`${id}+${cates.label}`} 
                name={`${cates.label}`} 
                onClick={onClick}>
                    {cates.label}
                </button>
        ))}

    </li>
    );
}

export default ToDo;