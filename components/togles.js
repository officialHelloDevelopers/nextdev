import './togles.css'
import Link from "next/link";


const Toggles = () => {
	return (
		<>
			<ul>
				<li>
					<Link href="/">Frontend <img className="arrowsvg" src="arrow.svg"/></Link>
					<ul className="dropdown">
						<li><Link href="/#introfrontend">What is Frontend?</Link></li>
						<li><Link href="/#intromern">Introduction to <strong>MERN</strong></Link></li>
						<li><Link href="/#introreact">Introduction to <strong>React.js</strong></Link></li>
						<li><Link href="/#filesys">Understanding File-System</Link></li>
						<li><Link href="/#components">Components in <strong>React.js</strong></Link></li>
						<li><Link href="/#prop">Probs in <strong>React.js</strong></Link></li>
						<li><Link href="/#satehooks">State & Hooks</Link></li>
						<li><Link href="/#useffect">Hook - useEffect()</Link></li>
						<li><Link href="/#useref">Hook - useRef()</Link></li>
						<li><Link href="/#rendering">Conditional Rendering and Rendering List</Link></li>
						<li><Link href="/#events">Handling Events in React</Link></li>
						<li><Link href="/#routing">Routing in React</Link></li>
						<li><Link href="/#usecontext">Hook - useContext()</Link></li>
						<li><Link href="/#usememo">Hook - useMemo()</Link></li>
						<li><Link href="/#usecallback">Hook - useCallBack()</Link></li>
						<li><Link href="/#formcreation">Creating Forms in React</Link></li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>
					<Link href="/backend">Backend <img className="arrowsvg" src="arrow.svg"/></Link>
					<ul className="dropdown">
						<li><Link href="/backend">Coming Soon</Link></li>
					</ul>
				</li>
			</ul>
			<ul>
				<li>
					<Link href="/dbs">DataBase <img className="arrowsvg" src="arrow.svg"/></Link>
					<ul className="dropdown">
						<li><Link href="/dbs">Coming Soon</Link></li>
					</ul>
				</li>
			</ul>
		</>
	)
}

export default Toggles;