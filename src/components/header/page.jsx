import Link from "next/link";

const navLinks = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "All Blogs",
    url: "/pages/blogs",
  },
];

const Header = () => {
  return (
    <div className="w-full  py-6 border-b-2 border-[#414750]">
      <div className="flex gap-12 text-[23px]">
        {navLinks.map((links) => {
          return (
            <Link key={links.id} href={links.url}>
              {links.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
