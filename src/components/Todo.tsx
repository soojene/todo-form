import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components';
import { cateTest, IToDo, selectOption, toDoState } from "../atoms";

const EachList = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 10px;
    /* background-color: green; */
`;


const ListName = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    `;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 5px;
`;

const Btn = styled.button`
    border:none;
    border-radius: 20px;
    padding: 3px 8px;
    margin-left: 5px;
    color: gray;
    background-color: rgba(0, 0, 0, 0.451);
    cursor: pointer;
    :hover{
        background-color: ${(props)=> props.theme.accentColor};
        color: ${(props)=>props.theme.textColor};
    }
`;
const DeleteButton = styled.button`
    font-size: 12px;
    border: rgba(255, 0, 0, 0.6) solid 1px;
    border-radius: 15px;
    padding: .5px 5px 2px 5.3px;
    margin-left: 7px;
    color: rgba(255, 0, 0, 0.6);
    background-color: transparent;
    cursor: pointer;
    :hover{
        background-color: red;
        color: white;
    }
`;

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const [cateTests, setCateTests] = useRecoilState(cateTest);
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
    const DeleteTodo = (event:any) => {
        console.log(event.target.name);
        setToDos((old)=> {
            const deletOne = old.findIndex((one)=>one.text === event.target.name);
            return [
                ...old.slice(0, deletOne),
                ...old.slice(deletOne+1)
            ];
        })
    }
    return (
    <EachList>
        <ListName>{text}</ListName>
        <Buttons>
        {cateTests?.filter((cates)=>(
            cates.label !== categoryId
        )).map(cates => (
            <Btn key={`${id}+${cates.label}`} 
                name={cates.label} 
                onClick={onClick}>
                    {cates.label}
                </Btn>
        ))}
        <DeleteButton name={text} onClick={DeleteTodo}>x</DeleteButton>
        </Buttons>
    </EachList>
    );
}

export default ToDo;