import DataImage from "./data";
import { listTools, listProyek } from "./data";
import FileCV from "./CV_HarelSuryaDarma.pdf";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <p>Web Developer • AI & NLP Enthusiast</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, I'm Harel Surya Darma
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Informatics Engineering Student passionate about building web
            applications using Laravel and exploring AI through Machine Learning
            & NLP.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#projects"
              className="
              bg-violet-700 
              px-8 py-3 
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
              href={FileCV}
              download="CV_HarelSuryaDarma.pdf"
              className="px-6 py-3 
              border border-white/20 
              rounded-full 
              text-white 
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

        <div className="relative md:ml-auto">
          <div className="absolute inset-0 bg-purple-600/20 blur-[100px] rounded-full scale-75 transition-all duration-500 group-hover:bg-purple-500/30 group-hover:scale-90" />
          <img
            src={DataImage.Profil}
            alt="Profile"
            loading="lazy"
            className="
            relative
            w-[380px]
            md:w-[430px]
            lg:w-[460px]
            xl:w-[460px]
            rounded-[28px]
            border border-white/10
            
            /* --- PENYESUAIAN SHADOW --- */
            /* Mengganti shadow hitam pekat dengan shadow ungu transparan yang berpendar */
            shadow-[0_20px_50px_rgba(168,85,247,0.15)] 
            hover:shadow-[0_20px_50px_rgba(168,85,247,0.3)]
            transition-shadow duration-500 ease-in-out
            /* -------------------------- */
            
            animate__animated
            animate__fadeInUp
            animate__delay-2s
            "
          />
        </div>
      </div>

      {/* Tentang */}
      <div className="about mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <p className="text-base/loose mb-10">
            Hi, I'm Harel Surya Darma. I am an Informatics Engineering student
            at Politeknik Caltex Riau, dedicated to developing efficient and
            intelligent software solutions. My expertise spans two primary
            domains: engineering production-grade web applications utilizing the
            Laravel and React ecosystems, and designing Natural Language
            Processing (NLP) architectures using Python. I believe the most
            impactful technological advancements occur at the intersection of
            robust system architecture and practical artificial intelligence.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  8<span className="text-violet-500">+</span>
                </h1>
                <p>Certificates</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">3</h1>
                <p>Core Disciplines</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32 w-full max-w-5xl mx-auto">
          {/* Bagian Header Stack */}
          <div className="mb-12">
            <h1
              className="text-4xl/snug font-bold text-white mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Tech Stack & Tools
            </h1>
            <p
              className="xl:w-2/3 lg:w-3/4 md:w-full text-base/loose text-gray-400"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              The core technologies I utilize to build scalable applications and
              train data models.
            </p>
          </div>

          {/* KATEGORI 1: WEB & SYSTEM ENGINEERING */}
          <div className="mb-10">
            <h3
              className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase"
              data-aos="fade-right"
            >
              Web & System Engineering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {listTools
                .filter((tool) => tool.kategori === "web")
                .map((tool) => (
                  <div
                    key={tool.id}
                    className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out group cursor-default overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={tool.dad}
                  >
                    <img
                      src={tool.gambar}
                      alt={`${tool.nama} Icon`}
                      className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 ease-out">
                        {tool.nama}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* PEMBATAS VISUAL 1 (Sinar Gradien) */}
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          ></div>

          {/* KATEGORI 2: DATA SCIENCE & AI ECOSYSTEM */}
          <div className="mb-10">
            <h3
              className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase"
              data-aos="fade-right"
            >
              Data Science & AI Ecosystem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {listTools
                .filter((tool) => tool.kategori === "data")
                .map((tool) => (
                  <div
                    key={tool.id}
                    className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out group cursor-default overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={tool.dad}
                  >
                    <img
                      src={tool.gambar}
                      alt={`${tool.nama} Icon`}
                      className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 ease-out">
                        {tool.nama}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* PEMBATAS VISUAL 2 (Sinar Gradien) */}
          <div
            className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-12"
            data-aos="zoom-in"
            data-aos-duration="1000"
          ></div>

          {/* KATEGORI 3: ESSENTIAL TOOLS & VERSION CONTROL */}
          <div>
            <h3
              className="text-sm tracking-widest text-purple-400 font-semibold mb-6 uppercase"
              data-aos="fade-right"
            >
              Essential Tools & Version Control
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {listTools
                .filter((tool) => tool.kategori === "tools")
                .map((tool) => (
                  <div
                    key={tool.id}
                    className="relative border border-white/10 rounded-xl p-4 flex items-center gap-4 bg-[#1A1A1A] hover:bg-[#222] hover:border-purple-500/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out group cursor-default overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={tool.dad}
                  >
                    <img
                      src={tool.gambar}
                      alt={`${tool.nama} Icon`}
                      className="w-12 h-12 object-contain bg-white/5 p-2 rounded-lg group-hover:bg-purple-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 ease-out"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-200 group-hover:text-purple-300 group-hover:translate-x-1 transition-all duration-300 ease-out">
                        {tool.nama}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* Proyek */}
      <div className="projects mt-32 py-10" id="projects">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Berikut Ini Beberapa Proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="Proyek image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 
                    bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block
                  border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Mari Terhubung dengan Saya
        </p>
        <form
          action="https://formsubmit.co/suryadarma4k@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email"
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan"
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer 
              border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  );
}

export default App;
