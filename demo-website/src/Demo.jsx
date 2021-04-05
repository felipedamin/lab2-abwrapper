import React from 'react';
import * as abwrapper from './ab-wrapper/';
import meme from './bugs.png'

const Demo = () => {
  let [group, setGroup] = React.useState("");
  let [tracked, setTracked] = React.useState(false);

  React.useEffect(() => {
    fetchGroup();
    abwrapper.track("page-view");
  }, [])

  async function fetchGroup() {
    await abwrapper.init('example', 1);
    setGroup(localStorage.getItem('group'));
  }

  const handleClick = (e) => {
    abwrapper.track(e.target.name);
    setTracked(true);
  }

  const handleRetry = (e) => {
    abwrapper.track(e.target.name);
    setTracked(false);
    fetchGroup();
  }

  return (
    <div className="App">
      <header className="App-header">
        { group==='A' && 
          <p>group A sees nothing special</p>
        }
        { group==='B' && 
          <div>
            <p>Group B can see this programming meme:</p>
            <img src={meme} alt="logo" />
          </div>
        }
        { group && !tracked && 
          <div>
            <div>
              <button name="positive" onClick={(e) => handleClick(e)}>HAPPY!! :)</button>
            </div>
            <div>
              <button name="negative" onClick={(e) => handleClick(e)}>SAD! :(</button>
            </div>
          </div>
        }

        
        { tracked && 
          <div>
            <p>look for results on dashboard</p>
            <button name="retry" onClick={(e) => handleRetry(e)}>would you like to retry?</button>
          </div>
        }
      </header>
    </div>
  );
}

export default Demo;