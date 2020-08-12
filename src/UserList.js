import React from 'react';

function User({user}){
    return(
        <div>
                <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList({users}){
   

    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />)  //key 값을 주는 이유는 각 원소들 마다 고유값을 줘서 리랜더링시 성능 최적화해준다.
                    ) //key로 사용할 고유값이 없을때는 index파라미터를 가져와서 사용한다. 하지만 index를 사용하면 성능에 도움이 되진 않는다. 
            }
        </div>
    )
}

export default UserList;

// 배열을 랜더링 할때는 key를 설정해 주어야 효율적으로 랜더링을 할 수가 있다.  만약 key값이 없다면 index값을 넣을 수 있지만 그것은 비효율 적이다.
//다만 데이터가 많지 않은 경우에는 Index를 사용한다고 해서 성능에 문제가 생기지 않는다. 
//배열 안의 데이터가 자주 업데이트가 되는데 그것을 index값으로 둔다면 그것은 성능에 매우 비효율적인 방식이다. 