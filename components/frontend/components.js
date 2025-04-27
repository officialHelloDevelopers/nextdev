import Code from "../code";

const Components = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="components">
          <h1>React: Components</h1>
          <br />
          <p>We sometimes want to create elements like navbar, header, footer etc.... and want to use them again and again in different pages and places. So, we create these in "components/" folder in "src/" then we export & import them in differents pages like the main one "App.jsx"</p>
          <br />
          <p>Let's practially perform it and see how it works:</p>
          <br />
          <p>We will create a component (jsx file) for example let's craete a navbar in "components/" folder</p>
          <br />
          <Code title="src/components/navbar.jsx" code={`import React from 'react';
const navbar = () => {
  return(
    //component code goes here
  )
}

export default navbar;`}/>
          <br />
          <p>Now your component <strong>navbar</strong> is created. But, you might be thinking that how to use it?</p>
          <p>To use a component, we first import it in the page we are going to use it then, we place in wherever in the page, we want to show it.</p>
          <br />
          <p>To import it use the command <strong>import:</strong></p>
          <br />
          <Code title="src/App.jsx" code="import navbar from './components/navbar'"/>
          <br />
          <p>Use this command to place it wherever you want it in your page:</p>
          <br />
          <Code title="src/App.jsx" code="&#60navbar /&#62"/>
        </div>
      )}
      <br />
			<h3>Video -</h3>
			<iframe src="https://drive.google.com/file/d/17Q569aqShzjtbL9Ksvr4AKdVp0jRKAZX/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default Components;