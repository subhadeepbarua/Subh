import React, { useEffect, useState } from "react";
import "./intro.css";
import bg from "../../assets/me.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  const [typedText, setTypedText] = useState("");
  const words = [
    "Web Developer",
    "Coder",
    "Freelancer",
    "Software Engineer",
    "UX/UI Designer",
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  useEffect(() => {
    const timer = setInterval(() => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypedText(currentWord.substring(0, charIndex + 1));
        charIndex++;
      }

      if (charIndex === currentWord.length + 1) {
        isDeleting = true;
      }

      if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }, 120);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <section id="intro">
        <div className="introBox">
          <div className="introContent alpha">
            <span className="hello">Hello, </span>
            <span className="introText">
              I'm <span className="introName">Subhadeep</span>
            </span>
            <div className="typeWritter">
              <span className="firstText">{typedText}</span>
            </div>
            <p className="introPara">Can do anything that you throw at me.</p>
            <Link>
              <button className="btn">
                <img src={btnImg} alt="" className="btnImg" />
                Hire Me
              </button>
            </Link>
          </div>
          <div
            className="introContent"
          >
            <img src={bg} alt="profile" className="bg" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
