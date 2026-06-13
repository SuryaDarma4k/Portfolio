import DataImage from "./data";
import { listTools, listProyek } from "./data";

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
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600"
            >
              View Projects
            </a>
            <a
              href="projects"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Download CV
              <i className="ri-download-line ri-lg"></i>
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
            Hi, I'm Harel Surya Darma.
            <p>
              I am an Informatics Engineering student at Politeknik Caltex Riau,
              dedicated to developing efficient and intelligent software
              solutions. My expertise spans two primary domains: engineering
              production-grade web applications utilizing the Laravel and React
              ecosystems, and designing Natural Language Processing (NLP)
              architectures using Python. I believe the most impactful
              technological advancements occur at the intersection of robust
              system architecture and practical artificial intelligence.
            </p>
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
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Tech Stack & Tools
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The core technologies I utilize to build scalable applications and
            train data models.
          </p>
          <div
            className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-2)
          grid-cols-1 gap-4"
          >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.keterangan}</p>
                </div>
              </div>
            ))}
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
