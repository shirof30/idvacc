import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  {
    label: 'About',
    children: [
      {
        label: 'About Us',
        link: '/about',
      },
      {
        label: 'Our Team',
        link: '#',
      },
      {
        label: 'Events',
        link: '#',
      },
      {
        label: 'Controller Roster',
        link: '#',
      },
    ],
  },
];

export default function NavbarLinks() {
  return (
    <div className="flex justify-between mx-auto w-full text-white">
      <div className="md:flex items-center gap-4 transition-all">
        {navItems.map((d, i) => (
          <div key={i} className="relative group px-2 py-3 transition-all">
            <Link href={d.link ?? '#'} className="flex cursor-pointer items-center gap-2 text-white group-hover:text-slate-400">
              <span>{d.label}</span>
              {d.children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
            </Link>

            {/* dropdown */}
            {d.children && (
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                {d.children.map((ch, i) => (
                  <Link key={i} href={ch.link ?? '#'} className="flex cursor-pointer items-center py-1 pl-3 pr-8 text-neutral-400 hover:text-black">
                    {/* item */}
                    <span className="whitespace-nowrap pl-3">{ch.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <section className="justify-end hidden sm:flex">
        <Link href="#" className="transition-all loginBtn py-3 px-3.5 text-base font-medium text-white hover:opacity-70">
          Helpdesk
        </Link>
        <Link href="#" className="transition-all loginBtn py-3 px-3.5 text-base font-medium text-white hover:opacity-70">
          Training
        </Link>
        <Link
          href="https://community.vatsim.net/"
          className="px-4 py-3 ml-2 font-medium text-white duration-300 ease-in-out bg-white rounded-lg bg-opacity-20 hover:bg-opacity-100 hover:text-black transition-all flex items-center justify-center"
        >
          Discord
        </Link>
      </section>
    </div>
  );
}
