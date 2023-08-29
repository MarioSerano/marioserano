import type { FC, ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useWindowSize } from "usehooks-ts";
import { layoutMaxScreenSize } from "../constants/tailwind";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { children: buttonChildren } = props;

  const { width } = useWindowSize();

  const isMobile = width < 1200;

  return (
    <div className="absolute w-full top-0 left-0 flex justify-center items-center bg-primary-prussian-blue text-white h-18">
      <div className={layoutMaxScreenSize}>
        <img src="/logo/logo-white.svg" alt="Mario" />
        <ul className="items-center text-p2 font-bold space-x-10 hidden xl:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <div className="h-6 min-h-[1.5rem] w-[1px] min-w-[1px] bg-white"></div>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">{buttonChildren}</a>
          </li>
        </ul>
        {width > 0 && isMobile ? (
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-primary-prussian-blue bg-white shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-accents-columbia-blue focus:shadow-[0_0_0_2px] focus:shadow-black"
                aria-label="Customise options"
              >
                <HamburgerMenuIcon />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
                sideOffset={5}
              >
                <DropdownMenu.Item className="group text-h6 leading-none text-primary-prussian-blue text-center font-bold rounded-[3px] flex items-center relative select-none outline-none data-[disabled]:text-neutral-grey data-[disabled]:pointer-events-none">
                  <a className="w-full px-[5px] py-4" href="#about">
                    About
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-h6 leading-none text-primary-prussian-blue text-center font-bold rounded-[3px] flex items-center relative select-none outline-none data-[disabled]:text-neutral-grey data-[disabled]:pointer-events-none">
                  <a className="w-full px-[5px] py-4" href="#work">
                    Work
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-h6 leading-none text-primary-prussian-blue text-center font-bold rounded-[3px] flex items-center relative select-none outline-none data-[disabled]:text-neutral-grey data-[disabled]:pointer-events-none">
                  <a className="w-full px-[5px] py-4" href="#skills">
                    Skills
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-h6 leading-none text-primary-prussian-blue text-center font-bold rounded-[3px] flex items-center relative select-none outline-none data-[disabled]:text-neutral-grey data-[disabled]:pointer-events-none">
                  <a className="w-full px-[5px] py-4" href="#resume">
                    Resume
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group text-[13px] leading-none text-primary-prussian-blue text-center rounded-[3px] flex items-center pt-2 relative select-none outline-none ">
                  <a className="w-full" href="#contact">
                    {buttonChildren}
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
