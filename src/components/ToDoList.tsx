import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { toDoSelector } from "../atoms";
import MakeCategories from './CreateCate';
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Separateline = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px auto;
  background-color: aliceblue;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <Container>
      <h1>To-do Category</h1>
      <MakeCategories/>
      <Separateline></Separateline>
      <h1>To-Dos List</h1>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </Container>
  );

}

export default ToDoList;