"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

type BookCallWithDialogProps = {
  label?: string;
};

const BookCallWithDialog: React.FC<BookCallWithDialogProps> = ({
  label = "Book a Call",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <Button className="w-full space-x-1 cursor-pointer h-[40px]">
              <Phone />
              <span>{label}</span>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose className="h-[300px] w-full bg-gray-900">
              <X
                onClick={() => handleDrawer(false)}
                className="text-red-500 text-[44px] cursor-pointer"
              />
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="hidden md:flex">
        <Dialog modal open={isOpen} onOpenChange={handleDrawer}>
          <DialogTrigger>
            <Button className="w-full space-x-1 cursor-pointer h-[40px]">
              <Phone />
              <span>{label}</span>
            </Button>
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            onInteractOutside={(e) => e.preventDefault()}
            className="p-0"
          >
            {" "}
            <div className="h-[300px] w-full bg-gray-900">
              <X
                onClick={() => handleDrawer(false)}
                className="text-red-500 text-[44px] cursor-pointer"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default BookCallWithDialog;
