import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";

type NavigationItemType = {
  id: string;
  title: string;
  isMobileMenu?: boolean;
  callback?: React.MouseEventHandler<HTMLButtonElement>;
};

const NavigationItem = ({
  id,
  title,
  isMobileMenu,
  callback,
}: NavigationItemType) => {
  const mobileMenuClasses =
    "block w-full text-left px-3 py-2 text-foreground hover:text-primary";
  const classes =
    "text-foreground hover:text-primary transition-colors duration-300";
  return (
    <button
      onClick={(event) => {
        scrollToSection(id);
        !!isMobileMenu && callback && callback(event);
      }}
      className={isMobileMenu ? mobileMenuClasses : classes}
      data-testid='nav-home'
    >
      {title}
    </button>
  );
};

export default function Navigation() {
  const BASE_URL = import.meta.env.BASE_URL;
  const NAVIGATION_ITEMS = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "contact", title: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className='bg-card shadow-lg fixed w-full top-0 z-50 h-20'
      data-testid='navigation'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex items-center'>
            <div className='max-w-[180px] max-h-[65px]' data-testid='logo'>
              <img src={`${BASE_URL}logo_2.jpg`} alt='Aarvika logo'></img>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-8'>
              {NAVIGATION_ITEMS.map(({ id, title }) => (
                <NavigationItem key={id} id={id} title={title}></NavigationItem>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid='mobile-menu-toggle'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden' data-testid='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t'>
              {NAVIGATION_ITEMS.map(({ id, title }) => (
                <NavigationItem
                  key={id}
                  id={id}
                  title={title}
                  isMobileMenu={true}
                  callback={() => setIsMenuOpen(!isMenuOpen)}
                ></NavigationItem>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
