import React from "react";
import { useRecoilValue } from "recoil";
import styled from 'styled-components';
import { selectOption, toDoSelector } from "../atoms";
import MakeCategories from './MakeCategories';
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 100px 0px;
`;

const WebTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ListTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 30px 0px 10px 0px;
`;

const ListConainer = styled.ul`
  margin-top: 15px;
  /* background-color: green; */
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categoryName = useRecoilValue(selectOption);
  return (
    <Container>
      <WebTitle>ToDoList</WebTitle>
      <MakeCategories/>
      {/* <Separateline></Separateline> */}
      <ListTitle>{categoryName}-List</ListTitle>
      <CreateToDo />
      <ListConainer>
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      </ListConainer>
    </Container>
  );

}

export default ToDoList;