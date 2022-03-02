import Card from 'components/card/Card'
import ContactForm from 'components/contactform/ContactForm'
import Hero from 'components/hero/Hero'
import Layout from 'components/layout/Layout'
import SectionBreak from 'components/sectionBreak/SectionBreak'

function Home() {
  return (
    <Layout>
      <Hero
        heading="Hi I'm Rolo, I'm cool!"
        subHeading="Here's some work in my favorite areas of study. These include Coding, Robotics, Photography, Video Editing, and saving the environment."
        buttonText="Learn More"
        bgImage="/bgGif.gif"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool Project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool Project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="Project image"
          title="Cool Project"
          text="An ai driven application that helps people study and memorize faster! Artificial intelligence automatically figures out what study point you need more help memorizing and times study cues to help information stick."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <SectionBreak />
      <h2>Contact</h2>
      <ContactForm />
    </Layout>
  )
}

export default Home
