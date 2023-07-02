import Link from 'next/link';

const Navbar = () => (
  <nav className={'navbar'}>
    <h1>The Dojo Blog</h1>
    <div className={'links'}>
      <Link href={'/'}>Home</Link>
      <Link href={'/day-1'}>First Day</Link>
    </div>
  </nav>
);

export default Navbar;
