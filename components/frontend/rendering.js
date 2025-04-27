import Code from "../code";

const Rendering = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="rendering">
          <h1>Conditional Rendering and Rendering List</h1>
          <br />
          <p>We'll use JavaScript only for this topic.</p>
          <br />
          <p>Now, how to render element only if a condition is true? You might sometimes have these type of questions and if you know JavaScript already you might think we can do this with simple if-else method.</p>
          <br />
          <p>Yes, you're right but there is a more simpler and authentic way to do it which is used in most of the cases in such situations. Let's take a example scenario and learn it.</p>
          <br />
          <p>We start with creating a state 'showMsg' with the update function 'setShowMsg' with default value 'true'.</p>
          <br />
          <Code title='src/App.jsx' code="const [showMsg, setShowMsg] = useState(true)" />
          <br />
          <p>Now, we'll create a message but with circumstance to only show only when our state 'showMsg' is true.</p>
          <br />
          <p>But we will do this without if-else statement, in a single line of code.</p>
          <br />
          <Code title='src/App.jsx' code="{showMsg?&#60p&#62this is the message&#60/p&#62: ''}" />
          <br />
          <p>We used curly brackets because it's normal JavaScript here.</p>
          <br />
          <p>Now, this message will only shown when 'showMsg' is true and if it's false it will return nothing.</p>
          <br />
          <p><strong>Rendering list in React.</strong></p>
          <br />
          <p>Here, the condition where you are stuck is, you have a list of todo tasks in Jason format containing two parameters title and description of each.</p>
          <p>Your task is to show all todos in a list.</p>
          <br />
          <p>Now, most of you who know JavaScript they will say we can do this just buy using for-loop method.</p>
          <br />
          <p>Yes, they are also correct but there is a another reliable way to do it.</p>
          <br />
          <p>This method is especially used in react apps and this is called 'The Map Method'.</p>
          <br />
          <p>To understand it let's take example. e.g. list...</p>
          <br />
          <Code title='src/App.jsx' code={`const [todos, setTodos] = useState([
  {
    title: 'Learn React',
    description: 'Go through useState and useEffect hooks.'
  },
  {
    title: 'Practice Redux',
    description: 'Understand actions, reducers, and store.'
  },
  {
    title: 'Build a Project',
    description: 'Apply what you\'ve learned in a small app.'
  }
]);`}/>
          <br />
          <p>To render all todos with the special technique, our syntax will go something like this...</p>
          <br />
          <Code title='src/App.jsx' code={`{todos.map((todo) => (
  &#60div key={todo.tile}&#62
    &#60h1&#62{todo.title}&#60/h1&#62
    &#60p&#62{todo.desc}&#60/p&#62
  &#60/div&#62
))}`} />
          <br />
          <p>If you know HTML CSS and JavaScript you will don't have any issue to understand this code.</p>
          <br />
          <p>But you might be thinking that what is that 'key' parameter?</p>
          <br />
          <p>When we are using map method it is required to define a key with this parameter and the key will unique for every element in list which is here taken as the title of todo.</p>
        </div>
      )}
      <br />

      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/10CvGPFnZ265jhoZfPm4cqbzJrWCKnjoE/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default Rendering;