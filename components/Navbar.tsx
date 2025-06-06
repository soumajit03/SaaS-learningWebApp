import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={116}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <Link href="/sign-in">
                        <button className="btn-signin">Sign In</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar