

import { useSession } from 'next-auth/react';
import Link from 'next/link';


export default function Navbar () {

  const {data: session, status} = useSession()
  return (
    <nav className="mt-[12px] ">
      <div className="flex items-baseline border-t-[4px] border-customGreen">
        {/* Logo Section */}
        <div className="text-black font-jura text-[60px] mr-[100px]">
          <Link href="/" >Bites</Link>
        </div>

        {/* Links Section */}
        <div className="space-x-[45px] text-[25px]">
          <Link href="/" className="text-black font-itim hover:text-green-400 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-black font-itim hover:text-green-400 font-medium">
            About us
          </Link>
          <Link href="/categories" className="text-black font-itim hover:text-green-400 font-medium">
            Categories
          </Link>
          <Link href="/contact" className="text-black font-itim hover:text-green-400 font-medium">
            Contact us
          </Link>
        </div>

        {/*Avatar section */}
        {status === "authenticated" && (
          <div className="ml-auto mr-4"> {/* Pushes avatar to the far right */}
            <Link href={`/profile/${session.user.id}`}>
              <img
                src={session.user.image || "/default.png"} // User profile image or a default one
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer border border-gray-300 hover:border-green-400"
              />
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
};

