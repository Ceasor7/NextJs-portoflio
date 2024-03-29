import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillMessage,
  AiFillPhone,
  AiFillMail,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import coding from '../public/coding.png';
import designing from '../public/designing.png';
import Image from 'next/legacy/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useDownloader from 'react-use-downloader';
import deployment from '../public/deployment.png';
import support from '../public/support.png';
import joseg from '../public/joseg.JPG';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/Joseph Gateru Resume.pdf';
  const filename = 'Joseph Gateru Resume.pdf';

  const [index, setIndex] = useState(0);
  const images = [
    { src: '/chat1.PNG', url: 'https://example1.com' },
    { src: '/chat2.PNG', url: 'https://example2.com' },
    { src: '/chat3.PNG', url: 'https://example3.com' },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Gateru kimani Portofolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Joseph Gateru</h1>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8 "
                  onClick={() => download(fileUrl, filename)}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Joseph Gateru Kimani
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hey there, I'm a Web Developer providing services for programming
              and design content needs using the Latest web technologies. Join
              me down below and let's get cracking!
            </p>

            <div className=" flex justify-center mx-auto bg-gradient-to-b shadow-2xl from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-20 md:h-60 md:w-60">
              <Image
                src={joseg}
                layout="fill"
                objectFit="cover"
                alt="profile picture"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="lg:flex gap-3">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <form className="bg-white p-6 rounded-lg shadow-xl">
                <h2 className="text-lg font-medium mb-4">Get in touch</h2>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full border border-gray-400 p-2 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-400 p-2 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    className="w-full border border-gray-400 p-2 rounded-lg"
                  />
                </div>
                <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500  text-white px-4 py-2 border-none rounded-md ml-8 ">
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I'm a Junior web developer who is still learning new technologies
              required to solve problems of experience into Designing,
              Development and deployment of Web appication.
              <span className="text-teal-500"> A FullStack developer </span> who
              has expertise in
              <span className="text-teal-500"> Javascript, </span>
              <span className="text-teal-500"> Next.Js, </span>
              <span className="text-teal-500"> React.Js, </span>
              <span className="text-teal-500"> Node.Js, </span>
              <span className="text-teal-500"> MongoDb </span> and
              <span className="text-teal-500"> and Firebase. </span>I have
              collaborated with talanted people to create digital products for
              both business and consumer use, using the latest web technologies.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including web design,
              development/programming and deployment.
            </p>
          </div>
          <div className="lg:flex gap-3">
            <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={designing}
                width={100}
                height={100}
                alt="Beautiful Designs"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Design for your Web Application
              </h3>
              <p className="py-2">
                Creating eye catching designs suited for the user needs.
                following core design theory. Exploring various Design features
                suitable for the project.<br></br>
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Adobe Photoshop</p>
              <p className="text-gray-800 py-1">Sketch</p>
              <p className="text-gray-800 py-1">AdobeXD</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Invision studio</p>
              <p className="text-gray-800 py-1">Corel Draw</p>
              <p className="text-gray-800 py-1">GIMP</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={coding}
                width={100}
                height={100}
                alt="Code your dream project"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality. Using the Latest web technolgies Like NextJs, ReactJs
                your project will be Fast, Reliable by the use of API's.
                intergrated with databases like MongoDb and Firebase.
              </p>
              <h4 className="py-4 text-teal-600">Programming Tools I Use</h4>
              <p className="text-gray-800 py-1">Visual studio code</p>
              <p className="text-gray-800 py-1">Visual studio basic</p>
              <p className="text-gray-800 py-1">Sublime text</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={deployment}
                width={100}
                height={100}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Project Deployment and Maintance
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={support}
                width={100}
                height={100}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Techincal support and consultation
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">
              Projects completed
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="lg:flex gap-3">
              <div className="text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
                <h3 className="text-2xl py-1 dark:text-black ">
                  Random thoughts site
                </h3>
                <div>
                  <img
                    src={images[index].src}
                    onClick={() => window.open(images[index].url)}
                    alt="project 1"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center gap-16 text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl ">
            <a href="mailto:josephkgateru@gmail.com">
              {' '}
              <AiFillMail className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Email
              </span>
            </a>
            <a href="tel:0708234571">
              {' '}
              <AiFillPhone className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Call{' '}
              </span>
            </a>
            <a href="https://twitter.com/JoseGee19">
              {' '}
              <AiFillTwitterCircle className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Twitter
              </span>
            </a>
            <a href="https://www.linkedin.com/in/joseph-gateru-188909255/">
              {' '}
              <AiFillLinkedin className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce " />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Linkedin
              </span>
            </a>
            <a href="https://www.instagram.com/aj_kim_jnr/">
              {' '}
              <AiFillInstagram className="text-md max-w-xl mx-auto md:text-xl cursor-pointer animate-bounce" />{' '}
              <span className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                Instagram
              </span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
