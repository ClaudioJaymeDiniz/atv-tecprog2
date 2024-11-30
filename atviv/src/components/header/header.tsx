// import React, { useEffect } from 'react';


// export const Header: React.FC = () => {
//     useEffect(() => {
//         const hamburguer = document.querySelector<HTMLDivElement>(".hamburguer");
//         const navMenu = document.querySelector<HTMLUListElement>(".nav-menu");

//         const handleClick = () => {
//             if (hamburguer && navMenu) {
//                 hamburguer.classList.toggle('active');
//                 navMenu.classList.toggle('active');
//             }
//         };

//         hamburguer?.addEventListener("click", handleClick);

//         return () => {
//             hamburguer?.removeEventListener("click", handleClick);
//         };
//     }, []);

//     return (
//         <div className="navbar">
//             <a href="/">
                 
//             </a>
           
//             <ul className="nav-menu">
//                 <li className="nav-item"><a href="/cadastro" className="nav-link">Cadastro</a></li>
//                 <li className="nav-item"><a href="/listar" className="nav-link">Listar</a></li>
//                 {/* <li className="nav-item"><a href="/contatos" className="nav-link">Contatos</a></li> */}
//             </ul>
//             <div className="hamburguer">
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div>
//         </div>
//     );
// };


// import { NavLinks } from "/nav-Links"
import { useState } from "react";
import { NavLinks } from "./nav-links";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between py-8 h-16">
      
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
              <NavLinks href="/">Home</NavLinks>
                </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLinks href="/cadastrotitular">Cadastro</NavLinks>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <NavLinks href="/listarclientes">Listar</NavLinks>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
              <NavLinks href="/hobbies">Hobbies</NavLinks>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
          <NavLinks href="/">Home</NavLinks>
          </li>
          <li>
          <NavLinks href="/cadastrotitular">Cadastro</NavLinks>
          </li>
          <li>
          <NavLinks href="/Listar">Listar</NavLinks>
          </li>
          <li>
          <NavLinks href="/hobbies">----------</NavLinks>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>

    </div>

  );
}