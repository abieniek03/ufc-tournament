"use client";
import { type ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "./Button";

interface Props {
  triggerLabel: string;
  title: string;
  children: ReactNode;
}

export function DialogMockup({ triggerLabel, title, children }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button styleType="primary">{triggerLabel}</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] rounded-[6px] border border-content/10 bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
              {title}
            </Dialog.Title>
            <Dialog.Close>
              <Cross2Icon width={30} height={30} viewBox="0 0 20 20" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
