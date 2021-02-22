/* eslint-disable global-require */
import { useEffect, useRef } from 'react';
import { NumberedHeading } from '@common/styles';
import Image from 'next/image';
import { skills } from '@config';
import { srConfig } from '@config/sr';
import { StyledAboutSection, StyledText, StyledPic } from './styles';

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    const ScrollReveal = require('scrollreveal');
    const sr = ScrollReveal.default();
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <NumberedHeading>About Me</NumberedHeading>
      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! I&apos;m Roberto, a Software Enginner based in Caracas, Venezuela.</p>
            <br />
            <p>
              I enjoy creating and designing software, whether that be websites,
              applications, or anything in between. My goal is to always build scalable products
              that provide performant experiences.
            </p>
            <br />

            <p>
              Shortly after graduating from&nbsp;
              <a target="_blank" rel="noreferrer" href="http://www.uc.edu.ve">
                Universidad de Carabobo
              </a>
              &nbsp;as Electrical Engineer, I started working on software development and then it
              turned into my lifestyle.
            </p>
            <br />
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Image width={300} height={300} src="/avatar.jpg" alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
