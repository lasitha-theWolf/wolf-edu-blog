import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai"; //search icon
import { FaMoon } from "react-icons/fa"; //darkmode moon icon

export default function Header() {

  const path = useLocation().pathname;

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        {/*when page minizum logo become small*/}
        <span className="px-1 py-2 bg-gradient-to-r from-indigo-500 via-blue-900 to-red-500 rounded-lg text-white">
          Wolf
        </span>
        Coder
      </Link>

      <form>
        <TextInput
          type="text"
          placeholder="search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline" //hidden lg:inline means when the page large show the full search bar
        />
      </form>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        {" "}
        {/*lg(large) unama hide wenwa button eka. pill use for round the button*/}
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        {" "}
        {/*gap use for to make space between buttons links */}
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          {" "}
          {/*when page get small unama hide wenwa button eka. pill use for round the button*/}
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue" pill>     {/*gradientDuoTone use for color eka shade wela wage yanna*/}
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle/> {/*screen eka podi karama navbar eka ena hamburger eka*/}
      </div>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}> {/*active={path === "/"} page ekata giyama Home kiyana eka highligh wela penwa. as={'div'} warning enawa link godak dana nisa eka nawaththanna danne*/}
          <Link to="/">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to="/about">About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
