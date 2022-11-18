import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/legacy/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import josegee from '../public/josegee.png';
import useDownloader from 'react-use-downloader';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/JGK.pdf';
  const filename = 'JGK.pdf';

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
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle className="cursor-pointer animate-bounce" />
              <AiFillLinkedin className="cursor-pointer animate-bounce" />
              <AiFillYoutube className="cursor-pointer animate-bounce" />
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={josegee}
                layout="fill"
                objectFit="cover"
                alt="profile picture"
              />
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
              <span className="text-teal-500"> A Freelancer </span> who has
              expertise in
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
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width={100}
                height={100}
                alt="Beuatiful dsigns"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                alt="Code your dream project"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Project Deployment
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
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="project deployment"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Project Deployment
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
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
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
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web1}
                alt="project1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web2}
                alt="project2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web3}
                alt="project3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web4}
                alt="project4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web5}
                alt="project5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web6}
                alt="project6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
