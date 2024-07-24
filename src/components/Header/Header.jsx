import { NavLink } from "react-router-dom";
import Logo from "../../../src/logo.png"
import "./style.css"

const Header = () => {
  return (
    <header className="header">

      <nav className="main-header d-flex align-items-center justify-content-between gap-5">
        <div className="logo">
          <NavLink to={'/'}>
            <img className="site-logo" src={Logo} alt="site logo" />
          </NavLink>
        </div>

        <ul className="d-flex align-items-center gap-5">
          <li>
            <NavLink to={`/`}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={`/about`}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={`/store`}>
              Store
            </NavLink>
          </li>

          <li>
            <NavLink to={`/e-books`}>
              E-Books
            </NavLink>
          </li>

          <li>
            <NavLink to={`/podcast-episodes`}>
              Podcast Episodes
            </NavLink>
          </li>

          <li>
            <NavLink to={`/blog-&-news`}>
              Blog & News
            </NavLink>
          </li>

          <li>
            <NavLink to={`/contact-us`}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <nav class="mobile-header">
        <input type="checkbox" id="checkbox" />
        <ul class="mob d-flex align-items-center justify-content-between">
          <li class="mob-logo">
            <NavLink to="./index.html">
              <img src={Logo} alt="site logo" />
            </NavLink>
          </li>

          <li class="hamburger" id="hamburger">
            <label for="checkbox">
              <span class="line"></span>
              <span class="line"></span>
              <span class="line"></span>
            </label>
          </li>
        </ul>


        <ul class="mobile-inner">
          <li>
            <NavLink to={`/`}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={`/about`}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to={`/store`}>
              Store
            </NavLink>
          </li>

          <li>
            <NavLink to={`/e-books`}>
              E-Books
            </NavLink>
          </li>

          <li>
            <NavLink to={`/podcast-episodes`}>
              Podcast Episodes
            </NavLink>
          </li>

          <li>
            <NavLink to={`/blog-&-news`}>
              Blog & News
            </NavLink>
          </li>

          <li>
            <NavLink to={`/contact-us`}>
              Contact Us
            </NavLink>
          </li>

        </ul>
      </nav>

    </header>
  )
}

export default Header