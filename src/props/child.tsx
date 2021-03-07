interface ChildProps{
  color: string;
  onClick: ()=>void;
}

export const Child = ({color, onClick}: ChildProps)=>{
  return (
    <div>
      <h1>Child</h1>
    </div>
  )
}
// here you can access all the React props (you are specifily tellin 
// ts that we are working with React)
// FC stands for FunctionComponent
export const ChildAsFC : React.FC<ChildProps> = ({color, onClick})=>{
  return (
  <div></div>
  );
}

