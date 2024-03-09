import Link from "next/link";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          {/*  to create a link that looks like a button. */}
          {/* In shadcn you can set the asChild parameter and nest the link component */}
          <Button size="sm" asChild>
            <Link href="/sign-up">
              Get Quolix for free
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};