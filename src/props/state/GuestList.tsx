import { useState } from 'react';


const GuestList: React.FC = ()=>{
  const [name, setName] = useState('');
  const [guests,setGuests] = useState<string[]>([]);
  const onClick=()=>{
    setName('');
    setGuests([...guests, name])
  }
  const showGuests = ()=>{
    return guests.map(guest =>{
      return (
        <li key={guest}>
          <h1>{guest}</h1>
        </li>
      )
    })
  }
  return <div>
    <h1>GuestList</h1> 
      <ul>
        {showGuests()}
        </ul>

      <input value={name} onChange={(e)=>setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
}

export default GuestList;