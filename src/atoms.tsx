import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category:string;
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(selectOption);
    return toDos.filter((toDo) => toDo.category === category);
    },
});

//creating-category

interface Icate {
    label:string;
    id:number;
}

export const cateTest = atom<Icate[]>({
    key: "cateTest",
    default: [],
});


export const selectOption = atom<string>({
    key: "selectOptions",
    default: "",
});