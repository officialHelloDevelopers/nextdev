import Code from "../code";
import { memo } from "react";

const UseEffect = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="useffect">
          <h1>Hook - useEffect()</h1>
          <br />
          <p><strong>useEffect()</strong> is use to give side effect for a state!</p>
          <br />
          <p>Confusing right? but believe it is as simple as it is looking confusing to you right now.</p>
          <br />
          <p><strong>So, what is <b>useEffect()</b> and why it is being used?</strong></p>
          <br />
          <p><strong>useEffect()</strong> says run the code inside me whenever the particular state is re-rendered(updated)</p>
          <br />
          <p>Let's take a example!</p>
          <br />
          <Code title='src/App.jsx' code={`import React, { useState } from 'react';

function App() {
  const [b, setB] = useState('hello');

  return (
    &#60div&#62
      &#60h1&#62{b}&#60/h1&#62
    &#60/div&#62
  );
}

export default App;`}/>
          <br />
          <p>We firstly, created a state 'b' with the default value 'hello'. Let's update it with using a button and change the value to 'hello again'</p>
          <br />
          <Code title='src/App.jsx' code={`import React, { useState } from 'react';

function App() {
  const [b, setB] = useState('hello');

  // Function to update the state to 'hello again'
  const updateMessage = () => {
    setB('hello again');
  };

  return (
    &#60div&#62
      &#60h1&#62{b}&#60/h1&#62
      &#60button onClick={updateMessage}&#62Update Message&#60/button&#62
    &#60/div&#62
  );
}

export default App;
`}/>
          <br />
          <p>Now, the syntax of <strong>useEffect()</strong> is are as follows...</p>
          <br />
          <Code title='src/App.jsx' code={`import React, { useEffect } from 'react'

useEffect(() => {
  // Code to run on component mount, update, or unmount
}, [targetStateName]);
`}/>
          <br />
          <p>Let's use it to alert user whenever the value of 'b' is updated by using this.</p>
          <br />
          <Code title='src/App.jsx' code={`import React, { useState, useEffect } from 'react';

function App() {
  const [b, setB] = useState('hello');

  // Function to update the state to 'hello again'
  const updateMessage = () => {
    setB('hello again');
  };

  // useEffect hook that runs when 'b' changes
  useEffect(() => {
    alert('value of b is updated');
  }, [b]);

  return (
    &#60div&#62
      &#60h1&#62{b}&#60/h1&#62
      &#60button onClick={updateMessage}&#62Update Message&#60/button&#62
    &#60/div&#62
  );
}

export default App;
`}/>
          <br />
          <p>Now, you might be thinking what will happen next. Lemme explain.</p>
          <br />
          <p>The code written in the <strong>useEffect()</strong> will run 2 times of total. When?</p>
          <br />
          <p>One, when the page is rendered for the first time because, the assigning the default value of a state is taken as a update in it's value, which is assigned on the first render of the page.</p>
          <p>Secondly, when the button is clicked because, it is resulting in a change in value of state 'b'.</p>
          <br />
          <p><strong>Usecases of <i>useEffect()</i></strong></p>
          <br />
          <p><strong>useEffect()</strong> has 3 use cases.</p>
          <br />
          <li>1. When you want it to run only first time when the page is visited (only once, the first time).</li>
          <br />
          <Code title='src/App.jsx' code={`import React, { useEffect } from 'react'

useEffect(() => {
  // Code to run on component mount, update, or unmount
}, []); //empty []`}/>
          <br />
          <li>2. Every time when any state is updated.</li>
          <br />
          <Code title='src/App.jsx' code="import React, { useEffect } from 'react'

useEffect(() => {
  // Code to run on component mount, update, or unmount
}); //[] is not there"/>
          <br />
          <li>3. (The most common case) Everythime when a targeted state is updated.</li>
          <br />
          <Code title='src/App.jsx' code={`import React, { useEffect } from 'react'

useEffect(() => {
  // Code to run on component mount, update, or unmount
}, [targetedStateName]); //fill the targeted state name in []`}/>
          <br />
          <p><strong>Important:</strong> <i>useState()</i> can be used in a component in the same way we used here, to performed when a 'prop' is changed, just replace the target from name of a state to name of a prop.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-GxTUUy_4B0FBEeWx42RL5yTgyGl3HUL/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default memo(UseEffect);