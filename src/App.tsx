import { useEffect } from 'react';
import { useRecoilState, useSetRecoilState} from 'recoil';
import { createGlobalStyle } from "styled-components";
import { cateTest, selectOption, toDoState } from './atoms';
import ToDoList from "./components/ToDoList";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;


function App() {
  const [cate, setCate] = useRecoilState(cateTest);
  const [todo, setTodo] = useRecoilState(toDoState);
  const setSeletBtn = useSetRecoilState(selectOption);
  useEffect(()=>{
    const cateList = localStorage.getItem("category");
    const todoList = localStorage.getItem("todoList");
    if(cateList === null){
        return;
    }else{
      setCate(JSON.parse(cateList));
      setSeletBtn(JSON.parse(cateList)[0]?.label);
    }

    if(todoList === null){
      return;
    }else{
      setTodo(JSON.parse(todoList));
    }

    }, []);

  useEffect(()=>{
    localStorage.setItem("category", JSON.stringify(cate));
    localStorage.setItem("todoList", JSON.stringify(todo));
    // setSeletBtn(cate[0]?.label);
  });

  return (
    <>
      <GlobalStyle />
      <ToDoList />
    </>
  );
}

export default App;