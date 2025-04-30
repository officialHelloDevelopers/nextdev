import Code from "../code";
import { memo } from "react";

const StateHooks = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="satehooks">
          <h1>States & Hooks</h1>
          <br />
          <h3>What is state?</h3>
          <br />
          <p>I hope you already know about variables in JavaScript but, let's take a example of a code below.</p>
          <br />
          <Code code='let a = "text"' title='src/App.jsx' />
          <br />
          <p>Here, we decleared a variable 'a' with a value "text", we can now render it's value in our react app by...</p>
          <br />
          <Code title='src/App.jsx' code='&#60p&#62{a}&#60/p&#62' />
          <br />
          <p>Later on, we created a function changing value of variable 'a' to "text2" and calling the function using a button. Below i.s the final code</p>
          <br />
          <Code title='src/App.jsx' code={`import React from 'react';
function App() {
  let a = 'text';

  function updateMessage() {
    a = 'text2';
  }
  
  return (
    &#60div&#62
      &#60p&#62{a}&#60/p&#62
      &#60button onClick={updateMessage}&#62Update Message&#60/button&#62
    &#60/div&#62
  );
}

export default App;`}/>

          <br />
          <p>Now, after running it we see, a page with 'text' written on it and a button saying 'Update Message'.</p>
          <br />
          <p>When we clicked on the button we noticed, still there 'text' is written only. But, according to our code, it should change the value of variable to 'text2'. Is it is not doing so?</p>
          <br />
          <p>The clear answer is YES, it is changing the value of 'a' to "text2" on clicking the button but then, why it is written "text" on the page it should be "text2" after clicking the button right?</p>
          <br />
          <p>NO, actually normal JavaScript variables, once rendered it is rendered and it will not affected if you change the value of it later until you managed to re-render the element where it's value is rendering.</p>
          <br />
          <p>To solve such problems, React provide us a special type of variable called States. And it's speciality is, whenever you change it's value it will render wherever it is placed. It takes 2 parametes.</p>
          <br />
          <div className="list">
            <li><strong>State Name</strong> The name of the variable. For e.g. a</li>
            <li><strong>Change Function</strong> The name of the function to change it's value. For e.g. updateA</li>
          </div>
          <br />
          <p>Syntax looks something like this...</p>
          <br />
          <Code title='src/App.jsx' code="const [a, updateA] = useState('text')" />
          <br />
          <p>Now you might wondered, what is this useState('text')?</p>
          <br />
          <p><strong>Hooks in React</strong></p>
          <br />
          <p>And this is what called a Hook in React, Hooks are nothing but some inbuilt function in React used to perform various tasks with a State. They are very in types but this one which you are wondering about is useState() and is uses is to define a default value of a State, which is here taken 'text'.</p>
          <br />
          <p>Don't worry we will learn about more common Hooks in React later on this course.</p>
          <br />
          <p>To change the value of a State, we use the value changing function defined in it which is here updateA(). So, easily the syntax will be...</p>
          <br />
          <Code title='src/App.jsx' code="updateA('text2')"/>
          <br />
          <p>Let's recall our previous code and update it with using State variable and solve the problem we were facing before.</p>
          <br />
          <Code title='src/App.jsx' code={`import { React, useState } from 'react';
function App() {
  const [a, updateA] = useState('text');

  function updateMessage() {
    updateA('text2');
  }
  
  return (
    &#60div&#62
      &#60p&#62{a}&#60/p&#62
      &#60button onClick={updateMessage}&#62Update Message&#60/button&#62
    &#60/div&#62
  );
}

export default App;`}/>
          <br />
          <p>Now, onclicking the button will not only change the value of State 'a', but will also re-render whole code so, the updated value will be shown wherever we used it.</p>
          <br />
          <p><strong>Important:</strong> Whenever you update a value of a state using it's (update funtion defined in it), to ensure it get updated in the page it will re-render the whole page with using the updated value of the state but without re-loading the page. In simpler words, updating the value of a state will run the whole code of the page again with the new value of that state but will not re-load the page.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1G2tOq0aaZD05pb7jIjU7eDlpKRR0ZYY5/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default memo(StateHooks);