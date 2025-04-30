import Code from "../code";
import { memo } from "react";

const UseContext = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="usecontext">
          <h1>Hook - useContext()</h1>
          <br />
          <p>Sometimes your app will be complex and having components inside components. </p>
          <p>This scenario is called <i>nesting</i> and the component containing the another component is called it's <i>parent component</i> where is the component which inside it's parent component I said to be <i>child component</i>.</p>
          <br />
          <p>In this case, if you have a state and you want to get it in the child component you firstly need to take it in the parent component and then from it you can proceed to child component.</p>
          <p>But the problem is, there is no use of that state the parent component. So, can't we just import it directly in the child component where it is needed?</p>
          <br />
          <p>Yes you can! Let's see how?</p>
          <br />
          <p>Let's take a scenario, we have a navbar component and in it we have a button component.</p>
          <br />
          <p>We have to pass the state from navbar altho to the button component like, we first needed to accept in as a prop in navbar then in button.</p>
          <br />
          <p>But let's do it using the Hook <strong>useContext()</strong>.</p>
          <br />
          <p>Create a folder 'context' and a JS 'context.js' in it.</p>
          <p>Write the following code to create a context in it.</p>
          <br />
          <Code title='contex/context.js' code={`import { createContext } from 'react'

export const counterContext = createContext(0)`}/>
          <br />
          <p>Now our <i>context</i> is created and it's initial value is '0', in your case you have to put the initial value equal to the initial value of the state you are going to target.</p>
          <br />
          <p>Now we will use this context in 'App.jsx' to link its value with our targeted state (here, count for e.g.).</p>
          <br />
          <Code title='src/App.jsx' code="import { counterContext } from './context/context'."/>
          <br />
          <p>Then wrap your whole code in '.Provider' of the context with passing the value of a parameter called 'value' as the targeted state.</p>
          <br />
          <Code title='src/App.jsx' code={`&#60counterContext value={count}&#62
  //Your whole code of the page
&#60/counterContext&#62`}/>
          <br />
          <p>Now go to the component where you want to use it and you can now just use it with a variable.</p>
          <br />
          <Code title='components/button.jsx' code={`import { useContext } from 'react'
import { counterContext } from './context/context'

function Button(){
  const counter = useContext(counterContext)

//Remaining code`}/>
          <br />
          <p>And wherever you want to use the state, just use <code>{`'{counter}'`}</code>.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-bj3hWVcQ7kzD4asN2bexp7xW7eNb4JF/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default memo(UseContext);