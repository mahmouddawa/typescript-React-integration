import {useState, useRef, useEffect} from 'react';
const users = [
  {name:'sarah', age:20},
  {name:'bob', age:21},
  {name:'jack', age:22}
]

const UserSearch: React.FC = ()=> {
  const inputRef = useRef<HTMLInputElement | null>(null); 
  const [name,setName] = useState('');
  const [user,SetUser] = useState<{name:string,age:number} | undefined >(undefined);
  useEffect(()=>{
    if(!inputRef.current){
      return;
    }
    inputRef.current.focus();
  },[])
  
  const onClick = ()=>{
    const findUser = users.find(user=>{
      return user.name === name;
    });
    SetUser(findUser);
  }
  return (
    <div>
      User search
      <input ref={inputRef} value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick = {onClick}>Find user</button>
      <div>
        {user && user.name}
      </div>
    </div>
  )
}
export default UserSearch;