import Code from "../code";

const FormCreation = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="formcreation">
          <h1>Creating Forms in React</h1>
          <br />
          <p>Now, in previous chapters, we already learned how to handle inputs in react and, there is a special method to handle it's value change and how we link its data with a state.</p>
          <p>If we don't follow that method, it will not be possible to type in input as we have seen.</p>
          <br />
          <p>If you can remember it was our chapter <strong>Handling Events in React</strong> where we have learned, we have to create a <i>handleChange</i> function to handle change on input value.</p>
          <p>But this will too much long, time consuming and complex to do with multiple inputs which a form have.</p>
          <br />
          <p>While playing with forms we don't use these mess rather, we have a module to help us!</p>
          <br />
          <p>In order to install it type the following command to your terminal and let's get started using it.</p>
          <br />
          <Code title={'bash'} code={`$ npm i react-hook-form`} />
          <br />
          <p>After installation, you can now import it in your form page.</p>
          <br />
          <Code title={'/pages/form.jsx'} code={`import { useForm } from 'react-hook-form'`} />
          <br />
          <p>If you are going with the most basic format you just need to import two properties from this module like this.</p>
          <br />
          <Code title={'/pages/form.jsx'} code={`const { register, handleSubmit } = useForm()`} />
          <br />
          <p>But now you just need to define one function that will triggered on submission of the form.</p>
          <br />
          <Code title={'/pages/form.jsx'} code={`const onSubmit = (data) {
  console.log(data)
}`} />
          <br />
          <p>Now, in form tag just place this function in <strong>onSubmit</strong> property but wrapped in <strong>handleSubmit</strong> function which we have imported from <strong>useForm</strong>.</p>
          <br />
          <Code title={'/pages/form.jsx'} code={`&#60form onSubmit=handleSubmit(onSubmit)&#62`} />
          <br />
          <p>Now, in all inputs just use that <strong>register</strong> function and it will down everything automatically so that, no need to play with any state to collect form data etc.</p>
          <br />
          <Code title={'/pages/form.jsx'} code={`&#60input type='text' placeholder='Your Name' {...register('name')}/&#62`} />
          <br />
          <p>Now the function we are triggering on submission of the form it will log.</p>
          <p>name: (input value from user)</p>
          <br />
          <p>The <strong>react-hook-form</strong> is not done here, it has more function giving more different needy facilities which is not possible to list all in one topic, it is recommended to visit it's documentation.</p>
        </div>
      )}
      <br />

      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/11NOi7bmYZ8BnvbUPawOQbdPpBqnU4LgW/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default FormCreation;