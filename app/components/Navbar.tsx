"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Contact, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <nav className="h-[60px] px-(--padding-x) py-[16px] flex items-center justify-between">
      <div>
        <div className="h-[50px] w-[65px] bg-gray-500/40 rounded flex justify-center items-center">
          logo
        </div>
      </div>
      <Dialog modal open={isOpen} onOpenChange={handleNavbar}>
        <DialogTrigger>
          <Button variant="outline" className="cursor-pointer">
            <Menu className="text-gray-700" />
          </Button>
        </DialogTrigger>
        <DialogContent
          showCloseButton={false}
          onInteractOutside={(e) => e.preventDefault()}
          className="top-[160px] p-0"
        >
          <div className="flex justify-between items-center border-b p-[12px]">
            <div className="h-[40px] w-[50px] bg-gray-500/40 rounded flex justify-center items-center">
              logo
            </div>
            <X
              onClick={() => handleNavbar(false)}
              className="text-gray-500 text-[44px] cursor-pointer"
            />
          </div>
          <div className="p-[12px]">
            <p>Link 1</p>
            <p>Link 2</p>
            <p>Link 3</p>
            <p>Link 4</p>
            <p>Link 5</p>
          </div>
          <div className="p-[12px] w-full">
            <Button className="w-full space-x-1 cursor-pointer">
              <Phone />
              <span>Contact Now</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
