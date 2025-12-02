"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import CallButton from "./CallButton";

const dummyLinks = [
  { id: 1, name: "Home", url: "#" },
  { id: 2, name: "About", url: "#" },
  { id: 3, name: "Services", url: "#" },
  { id: 4, name: "Blog", url: "#" },
  { id: 5, name: "Contact", url: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div className="md:border md:border-b py-[8px] sticky top-0 bg-white z-10">
      <nav className="container mx-auto h-[60px] px-(--padding-x) md:px-0 py-[26px] flex items-center justify-between">
        <div className="h-[50px] w-[65px] bg-gray-500/40 rounded flex justify-center items-center">
          logo
        </div>
        <div className="md:hidden">
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
                {dummyLinks.map((link) => (
                  <p className="whitespace-nowrap cursor-pointer">
                    {link.name}
                  </p>
                ))}
              </div>
              <div className="p-[12px] w-full">
                <Button className="w-full space-x-1 cursor-pointer">
                  <Phone />
                  <span>Contact Now</span>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <div className="p-[12px] flex gap-[22px]">
            {dummyLinks.map((link) => (
              <p className="whitespace-nowrap cursor-pointer hover:font-semibold">
                {link.name}
              </p>
            ))}
          </div>
          <div className="w-full ml-[18px]">
            <CallButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
