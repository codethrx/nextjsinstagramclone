import React from "react";
import Image from "next/image";
//icons
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
//getting the users
import { useSession, signOut, signIn } from "next-auth/react";
//router
import { useRouter } from "next/router";
function Header() {
  const { data } = useSession();
  const router = useRouter();
  console.log(data);
  return (
    <div className="sticky top-0 left-0 w-[100%] shadow-sm z-50 py-2">
      <div className="mx-[30px] flex justify-between bg-white max-w-10xl  xs:mx-auto">
        <div className="relative w-24 hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Mid */}
        <div className="max-w-xs">
          <div className="mt-1 relative ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              type="text"
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black focus:ring-black rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>
        {/* Right  */}
        <div className="flex items-center justify-end space-x-4">
          {" "}
          <HomeIcon className="navBtn" />
          <MenuIcon className="w-10 h-6 md:hidden cursor-pointer" />
          {data ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -right-1 -top-0 rounded-full bg-red-400 text-xs h-3 w-3 flex items-center justify-center animate-pulse text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                src={data?.user.image}
                alt="profile-pic"
                className="rounded-full h-10 cursor:pointer cursor-pointer"
              />
            </>
          ) : (
            <button
              // onClick={() => {
              //   router.push("/auth/signin");
              // }}
              onClick={signIn}
            >
              Signin
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
