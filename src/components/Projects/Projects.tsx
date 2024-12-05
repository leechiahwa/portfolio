import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import './projects.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

interface Project {
  title: string
  image?: string
  images?: string[]
  description: string
  url: string
}

function Projects() {
  const projects: Project[] = [
    {
      title: 'Commission-Based E-Commerce for Agents (Project for client)',
      description:
        'A role-based e-commerce site enabling agents and sub-agents to track commissions, and make purchases through Stripe with flexible payment options such as 6 months or 12 months instalment.',
      images: [
        './src/assets/img/ecommerce-login.png',
        './src/assets/img/ecommerce-dashboard.png',
        './src/assets/img/ecommerce-products.png',
      ],
      url: '',
    },
    {
      title: 'Mail Backend Service',
      description:
        'A backend service that sends emails using Nodemailer which is currently used in this portfolio at the contact section.',
      image: './src/assets/img/mailBackend.png',
      url: '', // Add scroll contact me section
    },
    {
      title: 'Weather Wave',
      description: 'Weather forecast website using WeatherApi and Shadcn UI.',
      image: './src/assets/img/weatherWave.png',
      url: 'https://leechiahwa.github.io/weather-wave/',
    },
    {
      title: 'Melody Moments',
      description:
        'An app that lets you easily view your most played songs on Spotify and lets you play them on Spotify with a click.',
      image: './src/assets/img/melodyMoments.png',
      url: 'https://leechiahwa.github.io/melody-moments/',
    },
  ]

  return (
    <div
      id="projects"
      className=" relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-600 to-sky-950"
    >
      <h2 className="title-font mb-4 text-3xl font-medium text-white sm:text-4xl">Projects</h2>
      <div className="flex flex-row flex-wrap items-baseline">
        {projects.map((project, index) => (
          <div key={index} className="m-5 flex flex-[1] flex-col items-center justify-center">
            {project.images ? (
              <Swiper modules={[Navigation]} navigation={true} className="sm:h-128 sm:w-128 h-96 w-96 rounded-md">
                {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="sm:h-128 sm:w-128 h-96 w-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="sm:h-128 sm:w-128 h-96 w-96 rounded-md object-contain"
              />
            )}
            <h3 className="m-3 text-center text-2xl font-medium text-white">{project.title}</h3>
            <p className="m-3 text-center text-white">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group relative m-1 cursor-pointer overflow-hidden rounded-md border-2 border-white px-3.5 py-2 font-medium "
            >
              <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-rose-400 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span className="ease relative text-white transition duration-300 group-hover:text-white">
                View Project
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
