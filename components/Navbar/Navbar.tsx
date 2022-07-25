import { useEffect, useState } from "react";
import Image from "next/image";

// Styles
import s from "./Navbar.module.css";
// Images and SVGs
import menuAlt from "../../public/MenuAlt.svg";
import Link from "next/link";

// Fixed Navbar on Scroll
function Navbar() {
  const [fix, setFix] = useState(false);
  const [height, setHeight] = useState(0);

  // Set height of navbar
  useEffect(() => {
    // Get the height of the navbar
    const setNewHeight = () => {
      // Get the height of the navbar
      const navbarHeight = document.querySelector(
        `.${s.bigNavbar__title}`
      )?.clientHeight;
      navbarHeight && setHeight(navbarHeight);
    };

    const handleScroll = () => {
      if (window.scrollY >= height) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    setNewHeight();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", setNewHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", setNewHeight);
    };
  }, [height]);

  return (
    <>
      {/* Small Screen */}
      <div className={s.navbar}>
        <div className={s.navbar__image__container}>
          <img
            src="/SBSOCIETY600.svg"
            alt="SBSOCIETY"
            className={s.navbar__image}
            width="100%"
          />
        </div>
        <Image src={menuAlt} alt="Menu" width={30} height={30} />
      </div>

      {/* Big Screen */}
      <div className={s.bigNavbar__title}>
        <img src="SBSOCIETY.svg" alt="SBSOCIETY" width="100%" />
      </div>
      <div className={s.bigNavbar}>
        <div id="navbar" className={s.bigNavbar__content}>
          <div
            className={
              fix
                ? `${s.bigNavbar__content__image__container} ${s.nav__image__fixed}`
                : s.bigNavbar__content__image__container
            }
          >
            <img
              src="/SBSOCIETY600.svg"
              alt="SBSOCIETY"
              width="100%"
              className={s.bigNavbar__content__image}
            />
          </div>
          <nav role="navigation" className={s.bigNavbar__content__links}>
            <a href="#" className={s.bigNavbar__content__links__link}>
              Shop
            </a>
            <a href="#" className={s.bigNavbar__content__links__link}>
              Not About Us
            </a>
            <a href="#" className={s.bigNavbar__content__links__link}>
              Not Contact
            </a>
          </nav>
          <div className={s.bigNavbar__content__buttons}>
            <Link href="/login">
              <div
                className={`${s.button1} ${s.bigNavbar__content__buttons__button}`}
              >
                Login
              </div>
            </Link>
            <div
              className={`${s.button2} ${s.bigNavbar__content__buttons__button}`}
            >
              Sign up
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
