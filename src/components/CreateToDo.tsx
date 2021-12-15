import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from 'styled-components';
import { selectOption, toDoState } from "../atoms";

const InputBox = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 5px 10px;
  border: none;
  /* border-bottom-left-radius: 15px; */
`;

const InputBtn = styled.button`
  font-size: 1rem;
  padding: 5px 10px 5px 7px;
  border: none;
  border-left: dotted 1px gray;
  border-top-right-radius:15px;
  border-bottom-right-radius: 15px;
  background-color: white;
  color: lightgray;
  cursor: pointer;
  :hover{
    background-color: lightgray;
    color: gray;
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const categoryId = useRecoilValue(selectOption);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category:categoryId},
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <InputBox
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <InputBtn>+</InputBtn>
    </form>
  );
}

export default CreateToDo;