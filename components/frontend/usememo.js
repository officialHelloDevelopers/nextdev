import Code from "../code";

const UseMemo = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="usememo">
          <h1>Hook - useMemo()</h1>
          <br />
          <p>Sometimes we perform really huge tasks in our projects. But, tab problem arise when you have states along with that huge task which cause is re-rendering on value change/update, which causes the use task run again and again on every re-render which makes our app too slow.</p>
          <p>So, we'll never want to run use tasks again and again unnecessarily</p>
          <br />
          <p>If you remember <strong>useRef()</strong> which we discussed earlier has the variable to persist its data across re-renders and ensure that the variable not forgot its value. </p>
          <p><strong>useMemo()</strong> is used to persist a huge function and ensure that it don't repeat on every re-renders.</p>
          <br />
          <p>Let's take a e.g. scenario and see how <strong>useMemo()</strong> works.</p>
          <br />
          <p>For the scenario, I'm going to take 0 - 19,999,999 numbers in a array then gonna check one by one if the number is 1,555,555 then set the  <i>isMyNum</i> true otherwise false in each object of the array.</p>
          <br />
          <Code title='src/App.jsx' code={`const nums = new Array(20_000_000).fill(0).map(_, i) => {
  return{
    index: i,
    isMyNum: i===1,555,555
})`}/>
          <br />
          <p>This will create a array in variable 'nums' which will containing that check data and array will look something like this.</p>
          <br />
          <Code title='Json' code={`{
  index: 1,
  isMyNum: false
},
{
  index: 2,
  isMyNum: false
},
{
  index: 3,
  isMyNum: false
},
... Till 19,999,999`}/>
          <br />
          <p>And <i>isMyNum</i> will be true only when it's the number 1,555,555.</p>
          <br />
          <p>Let's save this data in a state and we will find every objects from this array where <i>isMyNum</i> is true and will save those in a variable.</p>
          <br />
          <Code title='src/App.jsx' code={`const [numbers, setNumbers] = useState(nums)
const myNum = numbers.find(item=>item.isMyNum===true)`}/>
          <br />
          <p>Now this will store those object where <i>isMyNum</i> is true.</p>
          <br />
          <p>But there there will be only one object where it will be true which is when the index is 1,555,555.</p>
          <br />
          <p>Now in this function where we are finding <strong>myNum</strong> is very use because it is checking every 19,999,999 objects in the array and we'll never want it to run again and again unnecessarily, even when the page re-renders.</p>
          <br />
          <p>So we are going to wrap it in a <strong> useMemo </strong> Hook.</p>
          <br />
          <Code title='src/App.jsx' code="const myNum = useMemo(()=>numbers.find(item=>item.isMyNum===true), [])"/>
          <br />
          <p>Now this function will run only once and will never repeat on re-renders.</p>
          <br />
          <p>But we will want it to repeat each time the <strong>numbers</strong> changes/updates.</p>
          <br />
          <Code title='src/Appp.jsx' code="const myNum = useMemo(()=>numbers.find(item=>item.isMyNum===true), [numbers])"/>
          <br />
          <p>And your all set, now your web-app will run smoothly.</p>
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/1-Jz4AIf-_YOs4V7csbd77oF4FemJwQeR/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default UseMemo;