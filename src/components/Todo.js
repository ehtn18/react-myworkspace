// react 모듈에서 useState라는 함수 하나를 import 한 것
import { useRef, useState } from "react"; // useState를 쓰니까 자동으로 import가 되었음.

const Todo = () => {
  const [todoList, setTodoList] = useState([
    { memo: "React 공부하기" },
    { memo: "Javascript 연습하기" },
  ]);

  const input = useRef();

  const add = () => {
    console.log("--add--");

    console.log(input.current);
    console.log(input.current.value);

    setTodoList([{ memo: input.current.value }, ...todoList]);
  };

  return (
    <>
      {/* JSX Element 안에서 주석 넣기 */}
      {/* 입력폼 */}
      <div>
        <input type="text" placeholder="할 일 ..." ref={input} />
        {/* 함수의 이름을 대리자(delegate) == 함수의 본체와 같다 */}
        <button onClick={add}>입력</button>
      </div>
      {/* 목록 */}
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo.memo}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
