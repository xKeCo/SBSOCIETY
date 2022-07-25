import React from "react";
import SEO from "../components/SEO/SEO";
import s from "../styles/Login.module.css";

function login() {
  return (
    <>
      <SEO title="SBS | Login" />
      <div className={s.login}>
        <div className={s.login__form}>
          <h1>Login</h1>
        </div>
        <div className={s.login__image}>
          <img src="ohboy1.jpg" alt="image" width="100%" />
          <a
            href="https://www.thedifferentfolk.com/illustrators/david-oku"
            target="__blank"
          >
            Image by. David Oku
          </a>
        </div>
      </div>
    </>
  );
}

export default login;
