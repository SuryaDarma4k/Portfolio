import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan.👌</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, My Name is Harel Surya Darma
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Mahasiswa Teknik Informatika Politeknik Caltex Riau yang adaptif
            dengan fondasi kuat dalam rekayasa perangkat lunak dan analisis
            data. Memiliki pengalaman mengembangkan aplikasi web menggunakan
            ekosistem PHP dan JavaScript, serta berpengalaman dalam pemrosesan
            data menggunakan Python. Tertarik pada efisiensi sistem dan
            implementasi kecerdasan buatan (NLP/ML) untuk menyelesaikan masalah
            bisnis. Siap berkontribusi secara fleksibel baik dalam tim
            pengembangan perangkat lunak maupun analitik data
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-700"
            >
              Download CV
              <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-700"
            >
              Lihat Proyek
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
          loading="lazy"
        />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Diky Prayoga, seorang Full Stack Web Developer
            dan Designer untuk UI/UX Design maupun Product Digital, Saya percaya
            bahwa desain dan fungsionalitas harus berjalan beriringan, sehingga
            setiap proyek yang saya kembangkan tidak hanya terlihat menarik
            tetapi juga memberikan pengalaman pengguna yang optimal.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">
            Berikut ini beberapa tools yang biasa dipakai untuk pembuatan
            website ataupun Design
          </p>
          <div
            className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-2)
          grid-cols-1 gap-4"
          >
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
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
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">
          Berikut Ini Beberapa Proyek yang telah saya buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt="Proyek image" loading="lazy"/>
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) =>(
                    <p className="py-1 px-3 border border-zinc-500 
                    bg-zinc-600 rounded-md font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block
                  border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}

      {/* Contact */}
      <div className="kontak mt-32 sm:p-10 p-0">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
        Mari Terhubung dengan Saya
        </p>
        <form action="https://formsubmit.co/suryadarma4k@gmail.com" method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Nama Lengkap
              </label>
              <input type="text" name="nama" placeholder="Masukkan Nama" 
              className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">
                Email
              </label>
              <input type="email" name="email" placeholder="Masukkan Email" 
              className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="pesan"
              className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer 
              border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  );
}

export default App;
