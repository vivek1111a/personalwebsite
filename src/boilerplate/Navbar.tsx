import { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <Link to="/" className="text-white font-bold text-xl">
            Vivek
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/">
                    <Button variant="ghost">Home</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/blog">
                    <Button variant="ghost">Blog</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/projects">
                    <Button variant="ghost">Projects</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/about">
                    <Button variant="ghost">About Me</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact">
                    <Button variant="ghost">Contact Me</Button>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CloseIcon fontSize="medium" />
            ) : (
              <MenuIcon fontSize="medium" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <NavigationMenuList className="flex flex-col space-y-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" onClick={toggleMobileMenu}>
                  <Button variant="ghost" className="w-full">
                    Home
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" onClick={toggleMobileMenu}>
                  <Button variant="ghost" className="w-full">
                    Blog
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/projects" onClick={toggleMobileMenu}>
                  <Button variant="ghost" className="w-full">
                    Projects
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/about" onClick={toggleMobileMenu}>
                  <Button variant="ghost" className="w-full">
                    About Me
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/contact" onClick={toggleMobileMenu}>
                  <Button variant="ghost" className="w-full">
                    Contact Me
                  </Button>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      )}
    </nav>
  );
}
