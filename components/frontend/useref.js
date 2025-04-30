import Code from "../code";
import { memo } from "react";

const UseRef = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="useref">
          <h1>Hook - useRef()</h1>
          <br />
          <p>In the previous chapters we got to know that usign a 'useState()' to set a default value of a state results, re-rendering of the code whenever the state's value is changed or updated.</p>
          <br />
          <p>Now, in such cases if we take a normal JavaScript variable along with the state and the updating function of it, updating of the variable will result in the change of normal variable to it's default value. why?</p>
          <br />
          <p>Because the whole code will re-render(runs again) when a state is updated so it will also cause the normal variable to forgot it's updated value(if you have updated it in your code for some reason) and return to it's default value.</p>
          <br />
          <p>To solve this react provide us a Hook called 'useRef()'. By using this we can make a normal variable persist it's value across re-renders or bypass re-renders. Let's have a look on it's syntax in different usecases of it.</p>
          <br />
          <li>1. (most common) To make a variable bypass re-renders and persist it's value.</li>
          <br />
          <Code title='src/App.js' code="const varName = useRef(defaultValue)"/>
          <br />
          <p>But, now you can't use it's value by just calling the name of it 'varName' like we does with a normal variables rather, you should use '.current' like this...</p>
          <br />
          <Code title='src/App.jsx' code="varName.current"/>
          <br />
          <p>For e.g. If you want to console.log it's value so you will do...</p>
          <br />
          <Code title='src/App.jsx' code='console.log(varName.current)'/>
          <br />
          <li>2. When you want to use a variable to target a html element.</li>
          <br />
          <p>You know what? you can use a variable to target one/more html element and perform various tasks like changing their styling with JavaScript by just calling them with the name of that variable. Below is the syntax for this usecase.</p>
          <br />
          <Code title='src/App.jsx' code="const varName = useRef() //empty default value" />
          <br />
          <p>Now, in the targeted element use a property called 'ref' and give it's value 'varName' but in curly brackets. Below is a e.g. of a button. You can use multiple elements too, to be called with this one variable.</p>
          <br />
          <Code title='src/App.jsx' code="&#60button ref={varName}&#62Click me&#60/button&#62" />
          <br />
          <p>Using this variable let's change it's(button) backgrond-color.</p>
          <br />
          <Code title='src/App.jsx' code="varName.current.style.backgroundColor = 'red'" />
          <br />
          <p><strong>Important:</strong> Don't ever dare to show it in the display to the public it don't causes re-render on changing it's value so it will not get updated there for this task we already have 'useState()'</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-4xWidm3hoQy3WKHe8-bWt0u8x93bJGC/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default memo(UseRef);