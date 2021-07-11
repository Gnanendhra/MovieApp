import {Link} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content ">
      <h1 className="nav-head">MOVIES</h1>
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/popular" className="nav-link">
          <li>Popular</li>
        </Link>
      </ul>
    </div>
    <div className="nav-search">
      <AiOutlineSearch className="search" />
      <Link to="/Account">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZG57fgD4vll8KUKs_iTT20n33XwLtJC1wA&usqp=CAU"
          alt="icon"
          className="icon"
        />
      </Link>
    </div>
  </nav>
)
export default Header
