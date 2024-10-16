import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

export const NavBar=()=> {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h1>Meu Portifolio</h1>
			<nav ref={navRef}>
				<a href="#pag2">HOME</a>
				<a href="#pag3">PROJETOS</a>
				<a href="#pag4">CONTATOS</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}
