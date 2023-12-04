"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";

export default function Navbar() {
  const currentRoute = usePathname();
  return (
    <nav>
      <ul className="flex gap-10 text-2xl">
        <li>
          <Link
            href={"/"}
            className={
              currentRoute === "/" ? "active-route" : "" + " whitespace-nowrap"
            }
          >
            <NavItem text="Home" />
          </Link>
        </li>
        <li>
          <Link
            href={"/movie"}
            className={
              currentRoute === "/movie"
                ? "active-route"
                : "" + " whitespace-nowrap"
            }
          >
            <NavItem text="Movie" />
          </Link>
        </li>
        <li>
          <Link
            href={"/filmScreening"}
            className={
              currentRoute === "/filmScreening"
                ? "active-route"
                : "" + " whitespace-nowrap"
            }
          >
            <NavItem text="Film screening" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
