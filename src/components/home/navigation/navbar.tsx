"use client";

import { Container, Icons } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { user, isLoaded } = useUser();

  return (
    <header className="sticky inset-x-0 top-0 z-50 h-14 w-full border-b border-border bg-background/40 px-4 backdrop-blur-lg">
      <Container reverse>
        <div className="mx-auto flex h-full items-center justify-between md:max-w-screen-xl">
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="h-8 w-8" />
              <span className="text-lg font-medium">Astra</span>
            </Link>
          </div>
          <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
            <ul className="flex items-center justify-center gap-8">
              <Link href="#" className="text-sm hover:text-foreground/80">
                Pricing
              </Link>
              <Link href="#" className="text-sm hover:text-foreground/80">
                About
              </Link>
              <Link href="#" className="text-sm hover:text-foreground/80">
                Features
              </Link>
              <Link href="#" className="text-sm hover:text-foreground/80">
                Blog
              </Link>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            {isLoaded &&
              (user ? (
                <UserButton />
              ) : (
                <>
                  <Link
                    href="/sign-in"
                    className={buttonVariants({ size: "sm", variant: "ghost" })}
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      size: "sm",
                      className: "hidden md:flex",
                    })}
                  >
                    Start free trial
                  </Link>
                </>
              ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
