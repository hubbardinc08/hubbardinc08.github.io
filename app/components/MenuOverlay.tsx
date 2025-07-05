import React from 'react'
import NavLink from "./NavLink"

const navLinks = [
    { title: "About", path: "/about" },
    { title: "Hockey", path: "/hockey" },
    { title: "Astronomy", path: "/astronomy" },
    { title: "Music", path: "/music" },
    { title: "Other", path: "/other" }
];

const MenuOverlay = () => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {navLinks.map((link, index) => (
            <li key={index} className="my-2 md:my-0">
                <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  );
};

export default MenuOverlay;