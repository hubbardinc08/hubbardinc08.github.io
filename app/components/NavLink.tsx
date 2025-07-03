import Link from "next/link";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  title: ReactNode | string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className="block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-black"
    >
      {title}
    </Link>
  );
};

export default NavLink;