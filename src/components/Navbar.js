import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{
          backgroundColor: props.theme.background,
          color: props.theme.text,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: props.theme.accent }}>
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ color: props.theme.text }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutUs" style={{ color: props.theme.text }}>
                  About
                </Link>
              </li>
            </ul>

            {/* Theme Buttons */}
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group me-2" role="group" aria-label="Theme group">
                <button type="button" className="btn btn-primary" onClick={() => props.onThemeChange('obsidianGlow')}>
                  1
                </button>
                <button type="button" className="btn btn-primary" onClick={() => props.onThemeChange('midnightOasis')}>
                  2
                </button>
                <button type="button" className="btn btn-primary" onClick={() => props.onThemeChange('mysticShadows')}>
                  3
                </button>
                <button type="button" className="btn btn-primary" onClick={() => props.onThemeChange('nebulaNights')}>
                  4
                </button>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
