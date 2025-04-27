import Code from "../code";

const UseCallBack = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="usecallback">
          <h1>Hook - useCallBack()</h1>
          <br />
          <p>Let's say, you have a component and you want it to prevent re-rendering with the page when ever any component changes.</p>
          <p>Here, you can use <strong>memo</strong> function.</p>
          <br />
          <p>Import it in your component.</p>
          <br />
          <Code title={'components/component.jsx'} code={`import { memo } from 'react'`}/>
          <br />
          <p>During exporting your component wrap it in the function.</p>
          <br />
          <Code title={'components/component.jsx'} code={`export default memo(component)`}/>
          <br />
          <p>Now, this will prevent re rendering of this component wherever you import it. But it will only prevent until any value of a prop of this component not changes. On changing of the value of any prop when still trigger a re-render.</p>
          <br />
          <p>But you will notice if you are accepting a function in your component as a prop it will now not work anymore.</p>
          <p>This is because the function is not changing but it's identity is changing on every re-render of the page.</p>
          <br />
          <p>Actually, JavaScript by default gives a identity to a function and when you are accepting it as a prop it don't notice it's functionality rather, it notice whether the identity is changed or not.</p>
          <p>Now, when the page is re-rendering even the functionality is same but the identity is changed of the function, show <strong>memo</strong> function will take it as a change in prop and will re-render the component.</p>
          <br />
          <p>To solve this issue, we use a Hook callers <strong>useCallBack()</strong>.</p>
          <p>When you wrap your function in this it will preserve the function's identity across re-renders until the dependency state changes.</p>
          <br />
          <Code title={'jsx'} code={`useCallBack(() => {function}, [dependency])`} />
          <br />
          <p>You might think, what's the difference between <strong>useMemo()</strong> and <strong>useCallBack()</strong>.</p>
          <br />
          <p><strong>useMemo()</strong> prevents to run function again and again on re-renders and run it only one time and save the result in the variable. </p>
          <p>Now that function is not anymore function it's a kind of value depend on the result of the function.</p>
          <br />
          <p><strong>useCallBack</strong> never prevent the function to run again and again and never remember it's result value rather it prevents the identity of the function to be changed again and again on re-renders.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-_44CD1i5QGT7u5cl4f3PAUMmQKMCpNA/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default UseCallBack;