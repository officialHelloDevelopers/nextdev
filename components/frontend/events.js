import Code from "../code";

const Events = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="events">
          <h1>Handling Events in React</h1>
          <br />
          <p>Events here, mean the deeds done by usual like clicking scrolling hovering etc.</p>
          <br />
          <p>In JavaScript, we used the following command to handle events applied on elements.</p>
          <br />
          <Code title='src/App.jsx' code={`.addEventListener('click', () => {
  //your Code
})`}/>
          <br />
          <p>In the above code, we taken an example of click event.</p>
          <br />
          <p>Now, in React we add event listener just by adding the corresponding property of that event.</p>
          <p>For e.g. - click = onClick, hover = onMouseOver, change in value = onChnage etc. and apply it to our target element.</p>
          <br />
          <p>But there is something special in inputs when you define a state's value as the value of input field using the following command.</p>
          <br />
          <Code title='src/App.jsx' code="&#60input value={state} /&#62" />
          <br />
          <p>You will know not able to write anything in it and the value will remain every time the same. Basically you will not be able to type in the input field as the value is defined already and it will not change on typing because, we have defined it as a value of state. To solve this, you have to create a function which will update the value of the state itself when ever someone type anything in the input field.</p>
          <br />
          <p>For this function the code will look something like this.</p>
          <br />
          <Code title='src/App.jsx' code={`const handleChnage = (e) => {
  setState(e.target.value)
}`} />
          <br />
          <p>Here, setState() is the update function of the state and 'e' defines the input element.</p>
          <br />
          <p>So now it will change the value of state itself with the value user will type in the input field.</p>
          <br />
          <p>But, if you have multiple inputs and you want to save its data in a object in separate fields of object for each input, will you use if-else or create individual functions for each?</p>
          <p>No! There is a better way to do it and we can do it just with a single line of code.</p>
          <br />
          <p>To show how it works, I will firstly create a object having two fields 'usrname' and 'usremail' with empty values by default.</p>
          <br />
          <Code title='src/App.jsx' code={`const [usrdata, setUsrdata] = useState({
  usrname:''
  usremail:''
})`} />
          <br />
          <p>Now we will take two input responsible to change the value of each fields.</p>
          <br />
          <Code title='src/App.jsx' code={`&#60input type='name' name='usrname' value={usrdata.usrname} /&#62
&#60input type='email' name='usremail' value={usrdata.usremail} /&#62`} />
          <br />
          <p>Not that you have to keep the name of input field same as the responsible field is.</p>
          <p>Like for the input responsible for field 'usrname' has the name property as 'usrname'.</p>
          <br />
          <p>Now, in the function we can just write the following command to perform the task.</p>
          <br />
          <Code title='src/App.jsx' code={`const handleChnage = (e) => {
  setState({...usrdata, [e.target.name]:e.target.value})
}`}/>
          <br />
          <p>Now let's read what the code is trying to say.</p>
          <p>"...usrdata" = in the object (usrdata), [e.target.name] = target the value of the field whose name matches the name of input, e.target.value = set wha the user is typing as the value.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-Vx8aMuzFLv9KdaYkEXWDbwkH2fHwluI/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default Events;