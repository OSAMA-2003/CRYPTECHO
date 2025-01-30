import { useState } from "react";
import { HiMenuAlt3, HiX } from 'react-icons/hi';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { name: 'Home'},
      { name: 'About'},
      { name: 'Services'},
      { name: 'Vision' },
     
    ];
  
    return (
      <nav className=" w-full left-0 top-0 z-50 glass-effect border-b border-gray-500">
        <div className="container mx-auto px-5 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <div
             
              className="text-white text-2xl font-bold special-font"
            >
              CRYPTECHO
            </div>
  
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                 
                  className="text-white hover:text-blue-500 cursor-pointer transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>


            <div className="hidden md:flex">
                <a
                  href="#" 
                  className="text-white focus:outline-none bg-slate-600 px-4 py-2 rounded-full "
                >
                 Start A Project
                </a>
  
            </div>
  
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl focus:outline-none"
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </button>
            </div>
          </div>
  
          {/* Mobile Menu */}
          {isOpen && (
            <div
              
              className="md:hidden absolute top-16 left-0 right-0 glass-effect-menu"
            >
              <div className="flex flex-col items-center py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                   
                    className="text-white hover:text-blue-500 cursor-pointer transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  };

export default Nav