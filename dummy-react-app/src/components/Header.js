import React from "react";
import { ReactSVG } from 'react-svg'
import { Link } from "react-router-dom";
import "./App.css";

const publicPath = process.env.PUBLIC_URL
const Header = () => {
  return (
    <>
      <a slot='logo' id='react3' class='active rup-global-header__application-logo' aria-label='Logo' href='/react'>
        <ReactSVG src={`${publicPath}/react-2.svg`}/>
      </a>
  {/* <!--END: LOGO Slot--> */}
  <div slot='search-control'>I am a search-control</div>
  {/* <!--START: APP MENU Slot--> */}
  <nav
    slot='app-menu'
    class='rup-global-header__application-menu justify-end'
    aria-labelledby='rup-rfsg-main-menu-desc'
    data-test-main-menu=''
  >
    <p id='rup-rfsg-main-menu-desc' class='rup-visually-hidden'>The
      application's main menu</p>
      <Link to="react/about" class="rup-global-header__application-menu-item">About</Link>
      <Link to="react/terms" class="rup-global-header__application-menu-item">Terms</Link>
  </nav>
  {/* <!--END: APP MENU Slot-->
  <!--START: LOCAL CONTROLS Slot--> */}
  <div slot='local-controls' class='rup-global-header__local-controls'>
    <a
      id='react6'
      class='react-view rup-global-header__local-controls-link'
      title='Cart'
      data-test-shopping-cart-link=''
      href='/react'
    >
      <svg
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        class='fill-current w-5 h-5'
      >
        <path
          class='primary'
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M7.171 4.424v.001L7.345 5H20a1 1 0 01.942 1.336l-2.5 7A1 1 0 0117.5 14H9a1 1 0 01-.946-.676l-.231-.674v-.001L5.653 6.324a.994.994 0 01-.012-.037l-.213-.711v-.001L5.255 5H4a1 1 0 010-2h2a1 1 0 01.958.713l.213.711zm11.43 13.377V17.8A1 1 0 0018 16H8.999a1 1 0 00-.6 1.8 2 2 0 103.333.2h3.535A1.99 1.99 0 0015 19a2 2 0 104 0c0-.45-.149-.865-.4-1.2zM17 19zM8 7h10.581l-1.786 5h-7.08L8 7z'
        ></path>
      </svg>
    </a>
  </div>
  {/* <!--END: LOCAL CONTROLS Slot--> */}
  <div slot='user-menu'>
    {/* <!--START: USER MENU Slot--> */}
    <div class='rup-global-header__user-org-menu' data-test-user-menu=''>
      <button
        class='rup-global-header__user-org-menu-trigger'
        aria-expanded='false'
        id='rfsg-user-menu'
        title='User Menu'
        type='button'
        data-initials='IA'
      >
        <img alt='ccc' width='72' height='36' src={`${publicPath}/ccc.svg`}/>
        <span class='rup-visually-hidden'>User Menu</span>
      </button>
      {/* <!-- nav menu would go here --> */}
    </div>
    {/* <!--END: USER MENU Slot--> */}
    </div>
    </>
  );
};

export default Header;
