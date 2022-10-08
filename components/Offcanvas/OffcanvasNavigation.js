import Link from "next/link";
import { ROUTES } from '@/utils/routes';

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full pt-6">
    {ROUTES.map((route, i) => {
      return (
        <Link href={route.slug} key={route.slug}>
          <a className="flex justify-between w-full px-3 py-3 text-lg text-right text-gray-900 border-b border-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" onClick={closeMenu} alt={route.ariaLabel} title={route.ariaLabel} aria-label={route.ariaLabel}>
            {route.title}
          </a>
        </Link>
      );
    })}
  </nav>
);

export default Navigation;
