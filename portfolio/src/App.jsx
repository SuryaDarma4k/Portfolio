import DataImage from './data';

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
            />
            <q>Kode yang indah, lahir dari ketekunan.👌</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, My Name is Harel Surya Darma
          </h1>
          <p className='text-base/loose mb-6 opacity-50'>
            Mahasiswa Teknik Informatika Politeknik Caltex Riau yang adaptif
            dengan fondasi kuat dalam rekayasa perangkat lunak dan analisis
            data. Memiliki pengalaman mengembangkan aplikasi web menggunakan
            ekosistem PHP dan JavaScript, serta berpengalaman dalam pemrosesan
            data menggunakan Python. Tertarik pada efisiensi sistem dan
            implementasi kecerdasan buatan (NLP/ML) untuk menyelesaikan masalah
            bisnis. Siap berkontribusi secara fleksibel baik dalam tim
            pengembangan perangkat lunak maupun analitik data
          </p>
          <div className='flex items-center gap-4'>
            <a href="#" className='bg-violet-700 p-4 rounded-2xl hover:bg-violet-700'>
              Download CV 
              <i class="ri-download-line ri-lg"></i>
            </a>
            <a href="#" className='bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-700'>
              Lihat Proyek 
              <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] ml-auto" />
      </div>
    </>
  );
}

export default App
