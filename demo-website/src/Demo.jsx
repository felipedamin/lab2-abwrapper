import React from 'react';
import * as abwrapper from './ab-wrapper/';

const Demo = () => {
  let [group, setGroup] = React.useState("");
  let [tracked, setTracked] = React.useState(false);

  React.useEffect(() => {
    abwrapper.init('example', 1);
    setGroup(localStorage.getItem('group'));
  }, [])

  const handleClick = (e) => {
    abwrapper.track(e.target.name);
    setTracked(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        { group==='A' && 
          <p>You can see this because you belong to group A</p>
        }
        { group==='B' && 
          <p>You can see this because you belong to group B</p>
        }
        { group && 
          <>
            <button name="positive" onClick={(e) => handleClick}>click me to track positive action</button>
            <button name="negative" onClick={(e) => handleClick}>click me to track negative action</button>
          </>
        }

        
        { tracked && 
          <p>look for results on dashboard</p>
        }

      </header>
    </div>
  );
}

export default Demo;