import type { FC, ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { useWindowSize } from "../hooks";
import { layoutMaxScreenSize } from "../constants/tailwind";

interface NavbarProps {
  children: ReactNode;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { children: buttonChildren } = props;

  const { width } = useWindowSize();

  const isMobile = width && width < 1200;

  return (
    <div className="absolute left-0 top-0 flex h-18 w-full items-center justify-center bg-primary-prussian-blue text-white">
      <div className={layoutMaxScreenSize}>
        <img src="/logo/logo-white.svg" alt="Mario" />
        <ul className="hidden items-center space-x-10 text-p2 font-bold xl:flex">
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
            <a href="https://bit.ly/MarioResumeSE">Resume</a>
          </li>
          <li>
            <a href="#contact">{buttonChildren}</a>
          </li>
        </ul>
        {width > 0 && isMobile ? (
          <DropdownMenu.Root modal={false}>
            <DropdownMenu.Trigger asChild>
              <button
                className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white text-primary-prussian-blue shadow-[0_2px_10px] shadow-blackA7 outline-none hover:bg-accents-columbia-blue focus:shadow-[0_0_0_2px] focus:shadow-black"
                aria-label="Customise options"
              >
                <HamburgerMenuIcon />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[220px] rounded-md bg-white p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade"
                sideOffset={5}
              >
                <DropdownMenu.Item className="group relative flex select-none items-center rounded-[3px] text-center text-h6 font-bold leading-none text-primary-prussian-blue outline-none data-[disabled]:pointer-events-none data-[disabled]:text-neutral-grey">
                  <a className="w-full px-[5px] py-4" href="#about">
                    About
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group relative flex select-none items-center rounded-[3px] text-center text-h6 font-bold leading-none text-primary-prussian-blue outline-none data-[disabled]:pointer-events-none data-[disabled]:text-neutral-grey">
                  <a className="w-full px-[5px] py-4" href="#work">
                    Work
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group relative flex select-none items-center rounded-[3px] text-center text-h6 font-bold leading-none text-primary-prussian-blue outline-none data-[disabled]:pointer-events-none data-[disabled]:text-neutral-grey">
                  <a className="w-full px-[5px] py-4" href="#skills">
                    Skills
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group relative flex select-none items-center rounded-[3px] text-center text-h6 font-bold leading-none text-primary-prussian-blue outline-none data-[disabled]:pointer-events-none data-[disabled]:text-neutral-grey">
                  <a className="w-full px-[5px] py-4" href="#resume">
                    Resume
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="group relative flex select-none items-center rounded-[3px] pt-2 text-center text-[13px] leading-none text-primary-prussian-blue outline-none ">
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
