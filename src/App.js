import React, {useState, useRef} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs, 
      [name]:value
    });
  };

  const [users, setUsers] = useState ([
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
]);

const nextId = useRef(4); // useRef는 특정 DOM을 선택하고 싶을때 사용할 수 있지만, 그 대신에 어떠한 변수를 계속 기억하고 싶을떄 '(4)' 도 사용된다. 

const onCreate = () =>{
  const user = {
    id : nextId.current,
    username,
    email,
  }
  // setUsers([...users, user]) 배열에 데이터를 추가하는 첫번쨰 방법  "spread"
  setUsers(users.concat(user)) // 베열에 데이터를 추가하는 두번째 방법  "concat" (push는 사용하면 안된다. )
  setInputs({
    username:'',
    email:'',
  });
  
  nextId.current +=1 ; // 하지만 이 값이 바뀐다고 해서 컴포넌트가 리랜더링 되는것은 아니다. 

}
 
  return (
    <>
    <CreateUser 
      username={username} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate} 
     />
    <UserList users={users} />
   </>
  );
}



export default App;
