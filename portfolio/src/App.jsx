import DataImage from "./data";
import { listTools, listProyek, listSertif } from "./data";
import FileCV from "./CV_HarelSuryaDarma.pdf";
import { useState } from "react";
function App() {
  const [selectedSertif, setSelectedSertif] = useState(null);
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

      {/* Sertifikat */}
      {/* BLOK SERTIFIKAT & LISENSI */}
      <div
        className="certificates-section mt-32 w-full max-w-5xl mx-auto"
        id="certificates"
      >
        {/* Header Bagian */}
        <div className="mb-12">
          <h2
            className="text-4xl/snug font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Licenses & Certifications
          </h2>
          <p
            className="xl:w-2/3 lg:w-3/4 md:w-full text-base/loose text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Continuously improving through courses and certifications in web development, AI, and software engineering.
          </p>
        </div>

        {/* Grid Bento Sertifikat */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {listSertif.map((sertif) => (
            <div
              key={sertif.id}
              // Fungsi untuk membuka pop-up saat diklik
              onClick={() => setSelectedSertif(sertif)}
              className="group relative flex flex-col bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={sertif.dad}
            >
              {/* 1. Area Thumbnail (Gambar) */}
              <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center">
                <img
                  src={sertif.gambar}
                  alt={`${sertif.nama} Certificate`}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />

                {/* Overlay Efek Kaca */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-sm">
                  <svg
                    className="w-10 h-10 text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span className="text-white font-medium text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    View Detail
                  </span>
                </div>

                
              </div>

              {/* 2. Area Konten & Deskripsi */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Label Penerbit */}
                <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-1">
                  {sertif.penerbit}
                </p>

                {/* Judul Sertifikat */}
                <h3 className="text-white font-semibold text-base leading-snug mb-4 group-hover:text-purple-300 transition-colors">
                  {sertif.nama}
                </h3>

                {/* Mapping Skills (Pill Badges) */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {sertif.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2.5 py-1 text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- MODAL / POP-UP SECTION --- */}
        {selectedSertif && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300"
            onClick={() => setSelectedSertif(null)} // Tutup modal jika area luar diklik
          >
            {/* Kontainer Utama Pop-up */}
            <div
              className="relative w-full max-w-4xl bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(168,85,247,0.2)] flex flex-col max-h-[90vh] transform scale-100 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam kontainer menutup modal
            >
              {/* Tombol Tutup (X) */}
              <button
                onClick={() => setSelectedSertif(null)}
                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 hover:bg-red-500/80 text-white rounded-full backdrop-blur-md transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Area Gambar Utama */}
              <div className="w-full overflow-y-auto bg-white/5 flex-grow flex flex-col items-center p-4 sm:p-8 gap-6 custom-scrollbar">
                {selectedSertif.halaman && selectedSertif.halaman.length > 0 ? (
                  selectedSertif.halaman.map((imgSrc, index) => (
                    <img
                      key={index}
                      src={imgSrc}
                      alt={`${selectedSertif.nama} - Page ${index + 1}`}
                      // Menambahkan efek pembatas visual antar halaman agar rapi
                      className="w-full h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                    />
                  ))
                ) : (
                  /* Fallback: Jika Anda belum mengupdate data.js dan hanya ada properti 'gambar' */
                  <img
                    src={selectedSertif.gambar}
                    alt={selectedSertif.nama}
                    className="w-full h-auto object-contain rounded-lg shadow-2xl border border-white/10"
                  />
                )}
              </div>

              {/* Area Footer Pop-up (Keterangan & Tombol Aksi) */}
              <div className="p-6 bg-[#151515] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {selectedSertif.nama}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium tracking-wide">
                    {selectedSertif.penerbit}
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
      {/* Sertifikat */}

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
