import Code from "../code";
import { memo } from "react";

const Prop = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="prop">
          <h1>React: Props</h1>
          <br />
          <p>Sometimes we wiil want to change cretain values in a component in certain cases.</p>
          <p>For e.g. - you have a navbar containing the titile of the current page you will never want to keet it same across the whole app and will have to change it page by page. I know its a little bit complex but for now let's take a navbar which will taking it's title as a prop from "App.jsx".</p>
          <br />
          <p>Firstly, we'll create a navbar component with accepting a prop:</p>
          <br />
          <Code title="src/components/navbar.jsx" code={`import React from 'react';
const navbar = (title) => {
  return(
    &#60h1&#62{title}&#60/h1&#62
  )
}

export default navbar;`}/>
          <br />
          <p>Now its a navbar with accepting a porp "title" let's place it in "App.jsx" and pass its value "Its a title".</p>
          <br />
          <Code title="src/App.jsx" code={`import React from 'react';
import navbar from './components/navbar';

function App() {
  return(
    &#60&#62
      &#60navbar title='its a title'/&#62
    &#60/&#62
  )
}

export deafult App();`}/>
          <br />
          <p>Now in the value of <strong>h1</strong> of navbar will be "this is a title" in this page 'or' situation.</p>
        </div>
      )}
      <br />
			<h3>Video -</h3>
      <iframe src="https://drive.google.com/file/d/1D-JSX1j_R3LisLgw4O4Ai4hLn7IZKIXa/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default memo(Prop);