import React from "react";
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, cateTest, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./Todo";
interface ICateForm {
  cateInput: string;
}
function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  //creating-category
  const [cate, setCate] = useRecoilState(cateTest);
  const {register, handleSubmit, setValue} = useForm<ICateForm>();
  const handleForm = ({cateInput}: ICateForm) =>{
    setCate((oldValue) =>[
      { text:cateInput, id: Date.now() }, ...oldValue,
    ]);
    setValue("cateInput", "");
    console.log(cate);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <input {...register("cateInput", {required:"create a category"})} placeholder='create a categoty' />
      </form> 
      <select>
        {cate?.map((cates) => (
        <option key={cates.id} value={cates.text}>{cates.text}</option>
        ))}
      </select>
{/* creating-category */}

      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );

}

export default ToDoList;