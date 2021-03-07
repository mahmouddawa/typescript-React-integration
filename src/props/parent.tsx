import {Child} from './child';


const Parent = ()=>{
  const color = 'red';
  const number = 1;
  return (
    <div>
      <Child color={color} onClick={()=> console.log('something')}/>
    </div>
  )
}

export default Parent;