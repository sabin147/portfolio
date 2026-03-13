import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Section from './components/Section';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import { Education, Contact } from './components/EducationContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Hero />
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <Section id="skills" index="02" label="Technical Stack I've Worked With through projects and coursework - always adding more!">
          <Skills />
        </Section>
        <Section id="experience" index="04" label="Experience">
          <Experience />
        </Section>
        <Section id="projects" index="03" label="Projects">
          <Projects />
        </Section>
        <Section id="education" index="05" label="Education & Languages">
          <Education />
        </Section>
        <Section id="contact" index="06" label="Contact" noBorder>
          <Contact />
        </Section>
      </div>
      <Footer />
    </>
  );
}
