import React from "react";
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from "recoil";
import { cateTest, selectOption, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";
interface ICateForm {
  cateInput: string;
}
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(selectOption);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
    // console.log(category);
  };
  //creating-category
  const [cate, setCate] = useRecoilState(cateTest);
  const {register, handleSubmit, setValue} = useForm<ICateForm>();
  const handleForm = ({cateInput}: ICateForm) =>{
    setCate((oldValue) =>[
      { label:cateInput, id: Date.now() }, ...oldValue,
    ]);
    setCategory(cateInput);
    setValue("cateInput", "");
    // console.log(cate);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input {...register("cateInput", {required:"create a category"})} placeholder='create a categoty' />
      </form> 
      <select value={category} onInput={onInput}>
        {cate?.map((cates) => (
        <option key={cates.id} value={cates.label}>{cates.label}</option>
        ))}
      </select>
{/* creating-category */}

      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );

}

export default ToDoList;