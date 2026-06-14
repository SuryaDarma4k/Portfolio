import DataImage from "./data";
import { listTools, listProyek, listSertif } from "./data";
import cv from "./assets/CV_HarelSuryaDarma.pdf";
import { useState } from "react";

function App() {
  const [selectedSertif, setSelectedSertif] = useState(null);
  
  return (
    <>
      {/* 1. HERO SECTION */}
      <div id="home" className="hero grid md:grid-cols-2 items-center pt-28 xl:gap-0 gap-6 grid-cols-1 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <p className="font-medium text-gray-200 tracking-wide">Web Developer • AI & NLP Enthusiast</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 text-white">
            Hi, I'm Harel Surya Darma
          </h1>
          <p className="text-base/loose mb-8 text-gray-400 lg:w-[90%]">
            Informatics Engineering Student passionate about building web
            applications using Laravel and exploring AI through Machine Learning
            & NLP.
          </p>
          <div className="flex items-center sm:gap-4 gap-3 flex-wrap">
            <a
              href="#projects"
              className="
              bg-violet-700 
              px-8 py-3.5 
              rounded-full 
              text-white font-semibold
              transition-all duration-300 ease-out
              hover:bg-violet-600 
              hover:-translate-y-1 
              hover:shadow-[0_10px_20px_rgba(109,40,217,0.4)]
              active:translate-y-0 active:shadow-md"
            >
              View Projects
            </a>
            <a
              href={cv}
              download="CV_HarelSuryaDarma.pdf"
              className="px-6 py-3.5 
              border border-white/20 
              rounded-full 
              text-white font-medium
              flex items-center gap-2
              transition-all duration-300 ease-out
              hover:bg-white/10 
              hover:border-white/40
              hover:-translate-y-1 
              hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)]
              active:translate-y-0 active:shadow-sm active:bg-white/5"
            >
              Download CV
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="relative md:ml-auto mt-10 md:mt-0">
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full scale-75 transition-all duration-500 group-hover:bg-purple-500/30 group-hover:scale-90" />
          <img
            src={DataImage.Profil}
            alt="Profile"
            loading="lazy"
            className="
            relative
            w-full
            max-w-[460px]
            mx-auto md:mx-0
            rounded-[28px]
            border border-white/10
            shadow-[0_20px_50px_rgba(168,85,247,0.15)] 
            hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)]
            transition-shadow duration-500 ease-in-out
            animate__animated animate__fadeInUp animate__delay-2s
            "
          />
        </div>
      </div>
      {/* 1. HERO SECTION */}

      {/* 2. ABOUT SECTION */}
      <div className="about pt-28 mt-32 w-full max-w-7xl mx-auto px-6 lg:px-8" id="about">
        <div
          className="w-full p-8 md:p-12 bg-[#1A1A1A] border border-white/10 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="text-lg/loose mb-10 text-gray-300">
            Hi, I'm Harel Surya Darma. I am an Informatics Engineering student
            at Politeknik Caltex Riau, dedicated to developing efficient and
            intelligent software solutions. My expertise spans two primary
            domains: engineering production-grade web applications utilizing the
            Laravel and React ecosystems, and designing Natural Language
            Processing (NLP) architectures using Python. I believe the most
            impactful technological advancements occur at the intersection of
            robust system architecture and practical artificial intelligence.
          </p>
          <div className="flex flex-wrap items-center gap-12 md:gap-20 border-t border-white/10 pt-8 mt-8">
            <div>
              <h1 className="text-5xl font-bold mb-2 text-white">
                8<span className="text-violet-500">+</span>
              </h1>
              <p className="text-gray-400 font-medium tracking-wide">Certificates</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2 text-white">3</h1>
              <p className="text-gray-400 font-medium tracking-wide">Core Disciplines</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2. ABOUT SECTION */}

      {/* 3. TECH STACK & TOOLS */}
      <div className="tools mt-32 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2
            className="text-4xl/snug font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tech Stack & Tools
          </h2>
          <p
            className="xl:w-2/3 lg:w-3/4 md:w-full text-base/loose text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The core technologies I utilize to build scalable applications and
            train data models.
          </p>
        </div>

        <div className="mb-10">
          <h3 className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase" data-aos="fade-right">
            Web & System Engineering
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {listTools.filter((tool) => tool.kategori === "web").map((tool) => (
              <div
                key={tool.id}
                className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 ease-out group cursor-default"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt={`${tool.nama} Icon`} className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">{tool.nama}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent my-12" data-aos="zoom-in"></div>

        <div className="mb-10">
          <h3 className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase" data-aos="fade-right">
            Data Science & AI Ecosystem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {listTools.filter((tool) => tool.kategori === "data").map((tool) => (
              <div
                key={tool.id}
                className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 ease-out group cursor-default"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt={`${tool.nama} Icon`} className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">{tool.nama}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-purple-500/40 to-transparent my-12" data-aos="zoom-in"></div>

        <div>
          <h3 className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase" data-aos="fade-right">
            Essential Tools & Version Control
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {listTools.filter((tool) => tool.kategori === "tools").map((tool) => (
              <div
                key={tool.id}
                className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 transition-all duration-300 ease-out group cursor-default"
                data-aos="fade-up"
                data-aos-delay={tool.dad}
              >
                <img src={tool.gambar} alt={`${tool.nama} Icon`} className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">{tool.nama}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 3. TECH STACK & TOOLS */}

      {/* 4. PROJECTS SECTION */}
      <div className="projects pt-28 mt-32 w-full max-w-7xl mx-auto px-6 lg:px-8" id="projects">
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000">
            Projects
          </h2>
          <p className="text-base/loose text-gray-400 xl:w-2/3 lg:w-3/4 md:w-full" data-aos="fade-up" data-aos-delay="200">
            Berikut ini beberapa rekayasa sistem dan aplikasi yang telah saya bangun.
          </p>
        </div>
        
        <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="flex flex-col bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={proyek.dad}
            >
              <div className="relative overflow-hidden aspect-video">
                <img src={proyek.gambar} alt={proyek.nama} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white">{proyek.nama}</h3>
                <p className="text-gray-400 text-sm/loose mb-6 flex-grow">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyek.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="w-full bg-violet-700/20 hover:bg-violet-600 border border-violet-500/50 text-white font-medium py-2.5 rounded-lg text-center transition-colors mt-auto"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CERTIFICATIONS SECTION */}
      <div className="certificates-section pt-28 mt-32 w-full max-w-7xl mx-auto px-6 lg:px-8" id="certificate">
        <div className="mb-12">
          <h2 className="text-4xl/snug font-bold text-white mb-4" data-aos="fade-up">
            Licenses & Certifications
          </h2>
          <p className="xl:w-2/3 lg:w-3/4 md:w-full text-base/loose text-gray-400" data-aos="fade-up" data-aos-delay="200">
            Continuously improving through courses and certifications in web development, AI, and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listSertif.map((sertif) => (
            <div
              key={sertif.id}
              onClick={() => setSelectedSertif(sertif)}
              className="group relative flex flex-col bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={sertif.dad}
            >
              <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={sertif.gambar}
                  alt={`${sertif.nama} Certificate`}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-white font-medium text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Detail
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">{sertif.penerbit}</p>
                <h3 className="text-white font-semibold text-base leading-snug mb-4 group-hover:text-purple-300 transition-colors">{sertif.nama}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {sertif.skills.map((skill, index) => (
                    <span key={index} className="px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL POP-UP */}
        {selectedSertif && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
            onClick={() => setSelectedSertif(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSertif(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="w-full overflow-y-auto bg-white/5 flex-grow flex flex-col items-center p-4 sm:p-8 gap-6 custom-scrollbar">
                {selectedSertif.halaman && selectedSertif.halaman.length > 0 ? (
                  selectedSertif.halaman.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${selectedSertif.nama} - Page ${index + 1}`}
                      className="w-full h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                    />
                  ))
                ) : (
                  <img
                    src={selectedSertif.gambar}
                    alt={selectedSertif.nama}
                    className="w-full h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                  />
                )}
              </div>
              <div className="p-6 bg-[#151515] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedSertif.nama}</h3>
                  <p className="text-purple-400 text-sm font-medium tracking-wide">{selectedSertif.penerbit}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 6. CONTACT SECTION */}
      <div className="contact pt-28 mt-32 mb-20 w-full max-w-7xl mx-auto px-6 lg:px-8" id="contact">
        <div className="mb-12 text-left">
          <h2 className="text-4xl font-bold text-white mb-4" data-aos="fade-up" data-aos-duration="1000">
            Contact
          </h2>
          <p className="text-base/loose text-gray-400 xl:w-2/3 lg:w-3/4 md:w-full" data-aos="fade-up" data-aos-delay="200">
            Let's Connect.
            Feel free to reach out for internship opportunities, collaborations, or technology discussions.
          </p>
        </div>
        
        <form
          action="https://formsubmit.co/suryadarma4k@gmail.com"
          method="POST"
          className="bg-[#1A1A1A] border border-white/10 p-8 md:p-10 w-full max-w-3xl rounded-2xl"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-300">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama Anda"
                className="bg-white/5 border border-white/10 p-3.5 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                placeholder="alamat@email.com"
                className="bg-white/5 border border-white/10 p-3.5 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold text-gray-300">Pesan</label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="6"
                placeholder="Tuliskan pesan Anda di sini..."
                className="bg-white/5 border border-white/10 p-3.5 rounded-lg text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-y"
                required
              ></textarea>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-violet-700 hover:bg-violet-600 text-white font-semibold p-4 rounded-lg w-full md:w-auto md:px-10 transition-colors shadow-lg hover:shadow-violet-700/30"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;