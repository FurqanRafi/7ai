import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Seniors = () => {
  const seniors = [
    {
      img: "/Ethan.jpg",
      name: "Ethan",
      job: "Senior AI Engineer",
      about:
        "Forward-thinking entrepreneur leading cutting-edge machine learning ventures. His strategic insight helps businesses implement and scale AI solutions effortlessly.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      img: "/Amelia.jpg",
      name: "Amelia",
      job: "Senior AI Engineer",
      about:
        "Forward-thinking entrepreneur leading cutting-edge machine learning ventures. Her strategic insight helps businesses implement and scale AI solutions effortlessly.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      img: "/kam.jpg",
      name: "Kamal",
      job: "Senior AI Engineer",
      about:
        "Forward-thinking entrepreneur leading cutting-edge machine learning ventures. His strategic insight helps businesses implement and scale AI solutions effortlessly.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ];

  return (
    <div className="MyContainer py-20">
      <h1 className="text-4xl md:text-5xl mb-10 font-semibold leading-snug text-center md:text-left">
        You will be taught by <br />
        <span className="text-[#7853f0]">Experienced</span> Instructors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {seniors.map((senior, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 group cursor-pointer transition-all"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={senior.img}
                alt={senior.name}
                className="w-full h-110 lg:h-100  object-cover rounded-3xl transform group-hover:scale-105 transition duration-500 ease-in-out"
              />

              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-0 md:group-hover:opacity-100 transition-all duration-500 hidden md:block rounded-b-3xl"></div>

              <div
                className="absolute bottom-4 left-4 flex gap-4 
                              md:opacity-0 md:group-hover:opacity-100 
                              transition-all duration-500"
              >
                <a
                  href={senior.socials.linkedin}
                  className="text-white text-2xl hover:text-purple-300 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={senior.socials.twitter}
                  className="text-white text-2xl hover:text-purple-300 transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href={senior.socials.github}
                  className="text-white text-2xl hover:text-purple-300 transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <h2 className="text-2xl font-semibold">{senior.name}</h2>
            <p className="text-lg font-medium text-[#7853f0]">{senior.job}</p>
            <p className="text-gray-400 text-lg ">{senior.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seniors;
