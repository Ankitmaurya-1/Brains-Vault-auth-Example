import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();
  return (
    <>
      <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <div className="text-lg uppercase font-bold text-white ml-2">
              Brains Vault
            </div>
          </Link>
        </div>
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link
                href={process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL}
                className="mr-4"
              >
                <button className="bg-gray-400 hover:bg-white text-blue-700 font-bold py-2 px-4 rounded">
                  Sign In
                </button>
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
                className="mr-4"
              >
                <button className="bg-gray-400 hover:bg-white text-blue-700 font-bold py-2 px-4 rounded">
                  Sign Up
                </button>
              </Link>
            </>
          )}
          {userId && (
            <Link
              href="/profile"
              className="text-gray-300 hover:text-white mr-4"
            >
              Profile
            </Link>
          )}
          <div className="ml-auto">
            <UserButton signOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
