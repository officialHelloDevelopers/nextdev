import './code.css';

const Code = ({ code, title }) => {
	return (
		<>
			<div className="code">
				<p className="heading">{title}</p>
				<hr className="hr"/>
				<pre className="text" dangerouslySetInnerHTML={{ __html: code }}></pre>
			</div>
		</>
	);
};

export default Code;
