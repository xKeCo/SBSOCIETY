import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { motion } from "framer-motion";

// Local Components
import Navbar from "../components/Navbar/Navbar";
import AnimatedLetters from "../components/AnimatedLetters/AnimatedLetters";

// Styles
import s from "../styles/Home.module.css";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className={s.container}>
        <SEO title="SBS - Makes u fly" />

        <main className={s.main}>
          <section className={s.promo}>
            <div className={s.promo__details}>
              <AnimatedLetters title="Brownie" />
              <AnimatedLetters title="#54" />
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.4,
                }}
                className="row-col"
              >
                <p>
                  Made w/ special fruits that will gonna make u fly
                  &quot;Gui&ntilde;o Gui&ntilde;o&quot;
                </p>
                <button className={s.promo__button}>
                  <a href="" className={s.promo__button__link}>
                    Shop Now
                  </a>
                </button>
              </motion.div>
            </div>
            <div className={s.promo__image}>
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  ease: "easeInOut",
                  duration: 1,
                  delay: 0.4,
                }}
                className={s.promo__img__container}
              >
                <img src="/brownie.png" alt="image" width="100%" />
              </motion.div>
            </div>
          </section>
          <div className={s.slogan}>
            <div className={s.slogan__text}>
              <h1>
                <span>A Good Day</span>
                <span>To Have</span>
                <span>A Good Day</span>
              </h1>
            </div>
            <div className={`${s.slogan__text} ${s.slogan__text2}`}>
              <h1>
                <span>A Good Day</span>
                <span>To Have</span>
                <span>A Good Day</span>
              </h1>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
