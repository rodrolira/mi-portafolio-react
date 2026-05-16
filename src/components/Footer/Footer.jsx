/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} Rodrigo Lira Pizarro - Todos los derechos
        reservados
      </p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/rodrolira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rodrigo-lira-pizarro-056833155/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
