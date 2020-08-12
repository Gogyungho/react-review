import React, {useRef} from 'react';
import UserList from './UserList';


function App() {
  const users = [
    {
        id: 1,
        username: 'goguard',
        email:'whowho10@gmail.com'
    },
    {
        id: 2,
        username: 'go',
        email:'tester@example.com'
    },
    {
        id: 3,
        username: 'lip',
        email:'lip@example.com'
    }
];

const nextId = useRef(4); // useRef는 특정 DOM을 선택하고 싶을때 사용할 수 있지만, 그 대신에 어떠한 변수를 계속 기억하고 싶을떄 '(4)' 도 사용된다. 

const onCreate = () =>{
  console.log(nextId.current) //4
  nextId.current +=1 ; // 하지만 이 값이 바뀐다고 해서 컴포넌트가 리랜더링 되는것은 아니다. 

}
 
  return (
   <UserList users={users} />
  );
}



export default App;
