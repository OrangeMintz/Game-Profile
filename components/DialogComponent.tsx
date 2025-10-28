"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/8bit/dialog";

import { ReactNode } from "react";

interface DialogComponentProps {
  /** The button label that opens the dialog */
  triggerLabel?: string;
  /** Dialog title */
  title: string;
  /** Dialog description text */
  description?: string;
  /** Optional children (buttons, inputs, etc.) inside the dialog */
  children?: ReactNode;
}

export default function DialogComponent({
  triggerLabel = "Open",
  title,
  description,
  children,
}: DialogComponentProps) {
  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
        {triggerLabel}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
