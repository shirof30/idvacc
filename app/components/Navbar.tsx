import Link from 'next/link';
import Image from 'next/image';
import NavbarLinks from './NavbarLinks';

export function Navbar() {
  return (
    <nav className="bg-transparent top-0 absolute left-0 w-full mx-auto justify-between px-12 py-3 text-sm flex items-center z-10">
      <div className="container">
        <section className="flex items-center gap-12 justify-center">
          <Link href="/">
            <Image src="/mascot.png" alt="VATSIM Indonesia vACC" width={190} height={70} />
          </Link>
          <NavbarLinks />
        </section>
      </div>
    </nav>
  );
}
