import React from 'react';
import Father from './Father';

export default function GrandFather({ children }) {
  const greeting = () => {
    return 'hello my Son';
  };
  return (
    <div>
      GrandFather
      <div>{children(greeting)}</div>
      {/* <Father /> */}
    </div>
  );
}
