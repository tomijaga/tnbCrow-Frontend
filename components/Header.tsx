import Link from "next/link";
import { Config } from "Config";

export const Header = () => (
  <header className="relative bg-white">
    <>
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="inline-flex items-center">
              <img
                className="h-8 w-auto sm:h-10"
                src="./logo.png"
                alt="tnbCrow"
              />
              <span className="ml-2">tnbCrow</span>
            </a>
          </div>

          {/* <div className="hidden md:flex justify-items-center">
            {Config.navBarLinks.map((link) => {
              return <a className="ml-8">{link.text}</a>
            })}
          </div> */}

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/signup">
              <a className="">Create Account</a>
            </Link>

            <Link href="login">
              <a className="ml-8">Sign in</a>
            </Link>

            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800">
              Post Request
            </a>
          </div>
        </div>
      </div>
    </>
  </header>
);
