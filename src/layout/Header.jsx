/* eslint-disable react/jsx-no-target-blank */

function Header() {
    return <nav className="page-footer">
        <div className="nav-wrapper">
        <a href="#" className="brand-logo">React Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/Nsspb" target="_blank">Repo</a></li>
        </ul>
        </div>
    </nav>
}

export {Header}