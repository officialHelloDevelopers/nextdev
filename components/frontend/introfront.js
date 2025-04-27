const IntroFront = ({ fun }) => {
	return (
		<>
			{fun(
				<div id="introfrontend">
					<h1>What is <strong>Frontend</strong> in a website?</h1>
					<br />
					<p>The frontend of a website refers to everything that users see and interact with directly in their web browser. It's the visual part of the website or web application, including the layout, design, text, images, buttons, and navigation menus.</p>
					<br />
					<p>In simpler terms, the frontend is the 'face' of the website. It's responsible for making sure users can easily navigate, understand, and interact with the website. When you visit a website, the frontend is everything you can see on the screen.</p>
					<br />
					<p>The main goal of frontend development is to create an attractive, user-friendly experience that makes browsing easy and enjoyable.</p>
					<br />
					<p>In short, the frontend is all about how a website looks and how users interact with it.</p>
				</div>
			)}
		</>
	)
}

export default IntroFront;