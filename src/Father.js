import React from 'react';
import Son from './Son';
export default function Father(props) {
  console.log(props.greeting());
  const greetingFromFather = () => 'hellow dear son';
  const fatherName = 'nahid';
  return (
    <div>
      Father
      {props.children({ greetingFromFather, fatherName })}
      {/* <Son /> */}
    </div>
  );
}
