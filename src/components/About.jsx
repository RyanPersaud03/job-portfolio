import profileSvg from '../assets/profilepic.svg'
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={profileSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Junior Full Stack web developer with a background in Business
            currently looking for opportunities to work with a forward-thinking
            team. My collaborative spirit and dedication to continuous learning
            make me an ideal fit. Education Completed MERN web development certificate
            from the University of Toronto.

          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
