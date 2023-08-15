"use client";

import { Button } from "@/components/ui/button";

import toast from "react-hot-toast";

const notify = () => {
  toast.success('Button clicked!');
}

export default function RootPage() {
  return (
    <div className="flex m-4">
      <Button onClick={notify}>This is the Root Page.</Button>
    </div>
  );
}
