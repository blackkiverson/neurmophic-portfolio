import React from 'react'

import { links } from "@/lib/data";
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="flex text-white">
      <div className="fixed w-full py-5 bg-black">
        <nav>
          <ul
            className="flex space-x-5 font-light mx-6
          "
          >
            {links.map((link) => (
              <li
                className="flex hover:text-orange-300 ml-auto selection:text-orange-500"
                key={link.hash}
              >
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
            <div>
              <Button className="text-orange-500" variant={"outline"}>
                RESUME
              </Button>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}