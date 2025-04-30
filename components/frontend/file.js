import { memo } from "react";
const FileSys = ({ fun }) => {
	return (
		<>
			{fun(
				<div id="filesys">
					<h1>Understanding File-System</h1>
					<br />
					<p>There are several files & folder in a react app, having different meanings, tasks and uses. Some of the most important are as follows:</p>
					<br />
					<div className="list">
						<li><strong>index.html:</strong> The web-app created with React.js is actually rendering to the viewers through this html file. It is avaiable in root directory and changes made in it are global throughout the application.</li>
						<li><strong>src/index.css:</strong> This "index.css" located in "src/" folder is the styling file of the global "index.html" file so, we can say that the styling done here will be global.</li>
						<li><strong>src/App.jsx:</strong> This is our main app rendering throung "index.html" and here we will put our main code of the web-app and this is located in "src/" folder.</li>
						<li><strong>src/App.css:</strong> This is the css or styling file specifically for the "home page" or you can say it the main web-app. All the styling specifically for it will go here. It is also located in "src/" folder.</li>
						<li><strong>src/main.jsx:</strong> This is the configuration or you can say the connection of "App.jsx" to "index.html". As a beginner it is strictly not recomended to make changes in this file.</li>
					</div>
				</div>
			)}
		</>
	)
}

export default memo(FileSys);