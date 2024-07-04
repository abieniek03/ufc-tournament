"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Button } from "./Button";
import { IChildren, ButtonStyleType } from "../_types/types";

interface Props extends IChildren {
  triggerButtonStyle: ButtonStyleType;
  trigger: string | JSX.Element;
  title?: string;
}

export function Modal({
  triggerButtonStyle,
  trigger,
  children,
  title,
}: Readonly<Props>) {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <Button styleType={triggerButtonStyle || "primary"} onClick={open}>
        {trigger}
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="absolute z-10 focus:outline-none"
          onClose={close}
          __demoMode
        >
          <div className="fixed  inset-0 z-10 w-screen overflow-y-auto bg-background/85">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-xl rounded-xl bg-content/5 p-6 backdrop-blur-2xl">
                  <div className="mb-2 flex items-center justify-between font-semibold">
                    <DialogTitle as="h3" className="text-lg/7 text-content">
                      {title}
                    </DialogTitle>
                    <button onClick={close}>
                      <i className="ri-close-large-line" />
                    </button>
                  </div>
                  <div className="text-sm">{children}</div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
