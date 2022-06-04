import Image from "next/image";

// Styles
import s from "./Footer.module.css";

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__logo}>
        <img src="/SBSOCIETY600WHITE.svg" alt="logo" width="100%" />
      </div>
      <div className={s.footer__container}>
        <div className={s.footer__sub__details}>
          <h2 className={s.footer__sub__details__text}>
            Bother us for more details
          </h2>
          <button className={s.footer__button}>
            <a href="">Bother Us :p</a>
          </button>
        </div>
        <div className={s.footer__info}>
          <a href="#" className={s.footer__info__link}>
            Home
          </a>
          <a href="#" className={s.footer__info__link}>
            Shop
          </a>
          <a href="#" className={s.footer__info__link}>
            Not About Us
          </a>
          <a href="#" className={s.footer__info__link}>
            No Contact
          </a>
          <a href="#" className={s.footer__info__link}>
            Privacy Policy
          </a>
          <a href="#" className={s.footer__info__link}>
            Terms of Service
          </a>
        </div>
      </div>
      <div className={s.social}>
        <h3 className={s.social__corp}> 2022 | SBSociety &trade;</h3>
        <div className={s.social__links}>
          <a href="#">
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={35}
              height={35}
              className={s.facebook}
            />
          </a>
          <a href="#">
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={35}
              height={35}
              className={s.instagram}
            />
          </a>
          <a href="#">
            <Image
              src="/twitter.svg"
              alt="youtube"
              width={35}
              height={35}
              className={s.twitter}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
