import React from 'react';
import './style.css';
import GrandFather from './GrandFather';
import Son from './Son';
import Father from './Father';

export default function App() {
  const asset = 'grand father asset';

  return (
    <div>
      <GrandFather>
        {(greeting) => (
          <Father {...{ greeting }}>
            {(props) => <Son {...{ asset, ...props, greeting }} />}
          </Father>
        )}
      </GrandFather>
    </div>
  );
}
