import React from 'react';

function CreateUser ({ username, email, onChange, onCreate }){  //onChange는 input값이 바뀔때 호출하는 함수, onCreate 버튼을 눌렀을때 새로운 항목을 등록해주는 함수 
    return(
        <div>
            <input 
                name="username" 
                placeholder ="계정명" 
                onChange={onChange} 
                value={username} 
             />
            <input 
                name="email" 
                placeholder ="이메일" 
                onChange={onChange} 
                value={email} 
             />
            <button onClick={onCreate}>등록</button>
            
        </div>
    );
}

export default CreateUser; 