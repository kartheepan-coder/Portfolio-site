import Image from "next/image";

const Logo = ({ Img }) => {
  return (
    <div className="h-12 w-12 ml-3  rounded-full  flex justify-center overflow-hidden">
      <Image src={Img} height="48" width="48" />
    </div>
  );
};



const NavBarRightSection = () => {
  const navTextContent = [
    "Home",
    "Projects",
    "Acheivements",
    "Testimonials",
    "About",
    "Contact",
  ];
  return (
    <div className="text-red-500 relative left-48  w-full ">
      <ul className="flex first:text-black w-full   ">
        {navTextContent.map((t, i) => {
          return (
            <li
              key={i}
              className="text-ondark-light pl-5 text-lg font-poppins font-medium shadow-lg hover:text-white"
            >
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Logo,NavBarRightSection };
