import Code from "../code";

const Routing = ({ fun }) => {
  return (
    <>
      {fun(
        <div id="routing">
          <h1>Routing in React</h1>
          <br />
          <p>So till now, we have learned to create single page application (SPA) and in it we just added our 'App.jsx' to make changes in our application. But, do you think it's enough when you are dealing with the larger projects?</p>
          <p>Not at all!</p>
          <br />
          <p>In this chapter, we will learn to deal with multiple pages while creating a app with React.</p>
          <br />
          <p>Firstly, we'll install the library which is needed for assigning the routing.</p>
          <br />
          <Code title='App.jsx' code="$ npm i react-router-dom" />
          <br />
          <p>After this we will import it in our page where we want to setup the pages routing.</p>
          <p>Generally we donate in our 'main.jsx' bur for now we will do it in 'App.jsx'.</p>
          <br />
          <Code title='App.jsx' code="import { createBrowserRouter, RouterProvider } from 'react-router-dom'" />
          <br />
          <p>Now, let's define our routing and assign a page with the corresponding and point of the URL.</p>
          <br />
          <Code title='App.jsx' code={`const router = createBrowserRouter([
  {
    path:'/',
    element:&#60Home /&#62
  },
  {
    path:'/about',
    element:&#60About /&#62
  },
  {
    path:'/',
    element:&#60Contact /&#62
  },
])`} />
          <br />
          <p>Here, in each object path define the end point of the URL and element define its corresponding page to be shown.</p>
          <p>And we create pages just like we used to create elements.</p>
          <br />
          <p>Now, as we have created the router we are going to use it and tell where to place the content of the corresponding page.</p>
          <p>Use this code wherever you want to put the content of the pages.</p>
          <br />
          <Code title='App.jsx' code="&#60RouterProvider router={router} /&#62" />
          <br />
          <p>Now you can create a navbar to navigate across the endpoints.</p>
          <br />
          <p>But you might have noticed that some advanced applications like YouTube don't refresh when we go to a different endpoint of it. But if you use the traditional way of creating a navbar using anchor tag it will always get refresh the page whenever you change your endpoint.</p>
          <p>To solve this React provide us one new element called 'Link' which prevents reloading but will navigate through the endpoints too.</p>
          <br />
          <p>We can import it in our navbar like this.</p>
          <br />
          <Code title='App.jsx' code="import { Link } from 'react-router-dom'" />
          <br />
          <p>And it can we used normally just like a anchor element but, 'href' property of anchor tag is replaced with 'to' property of Link element.</p>
          <br />
          <Code title='App.jsx' code="&#60Link to='/'&#62Home&#60/Link&#62" />
        </div>
      )}
      <br />
      <h3>Video -</h3>
      <br />
      <iframe src="https://drive.google.com/file/d/102zCFwh7-7IK6n74MjYYV15vUWgGd5CI/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
      <br /><br />
    </>
  )
}

export default Routing;