import profileImg from '../assets/profileimg.jpg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='align-element grid md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-7xl font-bold tracking-wider'>Ryan Persaud</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full-Stack Developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            turning ideas into interactive reality
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/RyanPersaud03' target='_blank' rel='noopener noreferrer'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/ryanp03' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            {/* <a href='#'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a> */}
          </div>
        </article>
        <article className='hidden md:block'>
          <img src={profileImg} className='h-80 lg:h-96 profileimg' />
        </article>
      </div>
    </div>
  );
};
export default Hero;
