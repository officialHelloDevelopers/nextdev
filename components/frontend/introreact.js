import Code from "../code";

const IntroReact = ({ fun }) => {
	return (
		<>
			{fun(
				<div id='introreact'>
					<h1>Introduction to <strong>React.js:</strong> what? & why?</h1>
					<br />
					<p>In <i>MERN Stack</i>, we write <i>frontend</i> with a framework called <strong>React.js</strong> along with css to style components.</p>
					<br />
					<p>To create a basic <i>react-app</i> quickly, we use another framework called <strong>vite</strong>. Below is the command to run in the terminal to make one.</p>
					<br />
					<Code code="$ npm create vite@latest<br /><br />$ (Select folder name for your project 'or' '.' to use working folder)<br /><br />$ (Select React)<br /><br />$ (Select JavaScript)" title="bash" />
					<br />
					<p>Boom! your app is now created. But, some files & folder are a bit complicated right?</p>
					<p>Let's have a look on important ones.......</p>
				</div>
			)}
			<br />
			<h3>Video -</h3>
			<br />
			<iframe src="https://drive.google.com/file/d/11ubx42NWCoNjo_q3TaU1gD2qAxRhTaBC/preview" width="640" height="480" allow="autoplay" allowFullScreen></iframe>
			<br /><br />
		</>
	)
}

export default IntroReact;