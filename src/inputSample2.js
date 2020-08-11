import React, {useState} from 'react';

function InputSample2() {
    const [inputs, setInputs] = useState({
        name:'',
        nickname: ''
    })
    const {name, nickname} = inputs;

    const onChange = (e) =>{
        const {name, value} = e.target;

        setInputs({   //객체를 업데이트 해주기 위해서는 spread 문법을 사용해서 한번 불러오고, 값을 덮어 씌어서 상태를 업데이트 해주어야 한다. 
            ...inputs, 
            [name]:value,
        });
    }
 
 
    const onReset = ()=>{
        setInputs ({
            name:'',
            nickname:''
        })

    }
    return(
        <div>
            <input name="name" placeholder ="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder ="닉네임" onChange={onChange} value={nickname} />
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})

            </div>
        </div>
    );
}

export default InputSample2;