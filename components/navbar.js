import Toggles from "./togles";
import './navbar.css'

function NavBar(prop) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        id="search"
        placeholder='Search on this page....'
        value={prop.searchTerm}
        onChange={prop.handleSearchChange}
      />
      <div className="center">
        <img src="IMG_20250415_155941.png" alt="logo" />
        <h1>Hello, Developers!</h1>
      </div>

      <div className="right">
        <Toggles />
      </div>
    </nav>
  )
}
export default NavBar