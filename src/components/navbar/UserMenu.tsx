"use client";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useAppDispatch } from "@/redux/hooks";
import { onOpen } from "@/redux/modal/registerModalSlice";
import { onOpen as onLoginOpen } from "@/redux/modal/loginModalSlice";
import { NavBarProps } from "@/types";
import { signOut } from "next-auth/react";

const UserMenu = ({ currentUser }: NavBarProps) => {
  //States
  // Redux
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden md:block rounded-full transition hover:bg-neutral-200 cursor-pointer text-sm py-3 px-4 font-semibold">
          Airbnb your home
        </div>
        <div
          onClick={toggle}
          className="p-4 md:py-1 md:px-2 border-[1px] rounded-full border-neutral-200 flex flex-row items-center gap-3 cursor-pointer  hover:shadow-md transition text-xl"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm cursor-pointer">
          {currentUser ? (
            <>
              <MenuItem
                label="My trips"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="My favorites"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="My reservations"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="My properties"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Airbnb my home"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              <hr />
              <MenuItem
                label="Logout"
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
              />
            </>
          ) : (
            <>
              <MenuItem
                label="Login"
                onClick={() => {
                  dispatch(onLoginOpen());
                  setIsOpen(false);
                }}
              />
              <MenuItem
                label="Signup"
                onClick={() => {
                  dispatch(onOpen());
                  setIsOpen(false);
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
