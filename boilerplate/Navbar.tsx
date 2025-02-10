import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="navbar-logo">
            <NavigationMenuLink asChild>
              <Link to="/">
                <Button>Home</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="navbar-logo">
            <NavigationMenuLink asChild>
              <Link to="/blog">
                <Button>Blog</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="navbar-logo">
            <NavigationMenuLink asChild>
              <Link to="/projects">
                <Button>Projects</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="navbar-logo">
            <NavigationMenuLink asChild>
              <Link to="/about">
                <Button>About me</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
          <NavigationMenuItem className="navbar-logo">
            <NavigationMenuLink asChild>
              <Link to="/contact">
                <Button>Contact me</Button>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
