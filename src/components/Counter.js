import react, { useState } from "react";


//props: 화면에 표시하는 변수, 외부에서 받아옴
//stats: 화면에 표시하는 변수, 내부에서 선언
const Counter = () => {
  // state 변수를 선언하는 방법
  // React Hooks에서 useState Hook을 사용하는 방법
  // const [stats변수명, stats변경함수명] = useState(state변수의 초기값)
  const [count, setCount] = useState(0); // state변수 생성 및 state 변경 함수를 생성
};
// console.log(count);
// // stats변수를 읽음
// // state 변수를 변경
// // state 변경함수(변경할 값)
// setCount(count + 1)

const increaseCounter = () => {
  setCount(count + 1);
}
return <div>
  <p>You clicked {count} times</p>
  <button onClick={() => { increaseCounter();}}>Click me</button>
</div>

//export default Counter;