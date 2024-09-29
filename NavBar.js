import React from 'react'

function NavBar() {
  return (
    <div className="navBar">
          <div className="title">Recipe Master</div>
          <div className="menu">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li> <a href="RexipePage.html">Recipes</a> </li>
              <li><a href="#textCheckID">Testimonails</a></li>
            </ul>
          </div>
          <div className="signUp">
            <button>Sign Up</button>
          </div>
        </div>
  )
}

export default NavBar
