import Profil from "/assets/profil.png";

const Image = {
  Profil
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/laravel.png";
import Tools4 from "/assets/tools/css.png";
import Tools5 from "/assets/tools/html.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/python.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/mysql.png";
import Tools10 from "/assets/tools/colab.png";
import Tools11 from "/assets/tools/filament.png";
import Tools12 from "/assets/tools/php.png";
import Tools13 from "/assets/tools/jupyter.png";
import Tools14 from "/assets/tools/pandas.png";
import Tools15 from "/assets/tools/pytorch.png";
import Tools16 from "/assets/tools/scikitlearn.png";
import Tools17 from "/assets/tools/midtrans.png";
import Tools18 from "/assets/tools/tailwind.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1500",
    kategori: "tools",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "100",
    kategori: "web",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Laravel",
    ket: "Framework",
    dad: "200",
    kategori: "web",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "CSS",
    ket: "Language",
    dad: "300",
    kategori: "web",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Html",
    ket: "Language",
    dad: "400",
    kategori: "web",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
    kategori: "web",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Python",
    ket: "Language",
    dad: "1100",
    kategori: "data",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Repository",
    dad: "1600",
    kategori: "tools",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "MySql",
    ket: "Database",
    dad: "600",
    kategori: "web",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Google Colab",
    ket: "Code Editor",
    dad: "1700",
    kategori: "tools",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Filament",
    ket: "Framework",
    dad: "700",
    kategori: "web",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Php",
    ket: "Language",
    dad: "800",
    kategori: "web",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Jupyter",
    ket: "Code Editor",
    dad: "1800",
    kategori: "tools",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Pandas",
    ket: "Library",
    dad: "1200",
    kategori: "data",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "PyTorch",
    ket: "Library",
    dad: "1300",
    kategori: "data",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Scikit-Learn",
    ket: "Library",
    dad: "1400",
    kategori: "data",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Midtrans",
    ket: "Library",
    dad: "900",
    kategori: "web",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Tailwind CSS",
    ket: "Library",
    dad: "1000",
    kategori: "web",
  },
];

import P1_Cover from "/assets/proyek/proyek1.png";
import P1_Search from "/assets/proyek/proyek1_2.png";
import P1_Class from "/assets/proyek/proyek1_3.png";
import P1_Seat from "/assets/proyek/proyek1_4.png";
import P1_Pass1 from "/assets/proyek/proyek1_5.png";
import P1_Pass2 from "/assets/proyek/proyek1_6.png";
import P1_Payment from "/assets/proyek/proyek1_7.png";
import P2_Cover from "/assets/proyek/proyek2.png";
import P2_Detail from "/assets/proyek/proyek2_4.png"; 
import P2_Booking from "/assets/proyek/proyek2_6.png"; 
import P2_Checkout from "/assets/proyek/proyek2_7.png"; 
import P2_Payment from "/assets/proyek/proyek2_8.png"; 
import P2_Status from "/assets/proyek/proyek2_10.png";
import P3_Cover from "/assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: P1_Cover, // Gambar yang muncul di grid luar
    gallery: [
      P1_Cover, 
      P1_Search, 
      P1_Class, 
      P1_Seat, 
      P1_Pass1, 
      P1_Pass2, 
      P1_Payment
    ], // Array gambar yang akan di-looping di dalam Smart Modal
    nama: "Garuda Flight Booking System",
    desk: "A flight reservation system with real-time seat selection and flight class management. Integrates Livewire for dynamic, refresh-free interactions and Filament for the admin dashboard.",
    tools: ["Laravel", "Livewire", "Filament", "Midtrans API"],
    github_link: "https://github.com/SuryaDarma4k/garudafligh", 
    dad: "100",
  },
  {
    id: 2,
    gambar: P2_Cover,
    gallery: [
      P2_Cover,
      P2_Detail,
      P2_Booking,
      P2_Checkout,
      P2_Payment,
      P2_Status
    ],
    nama: "Sewa Rental Platform",
    desk: "A mobile-first rental platform optimized for mobile devices. Built with an MVC architecture using Laravel 12 and Tailwind CSS to ensure efficient data processing.",
    tools: ["Laravel 12", "PHP", "Tailwind CSS", "MySQL"],
    github_link: "https://github.com/SuryaDarma4k/SewaBarang",
    dad: "200", 
  },
  {
    id: 3,
    gambar: P3_Cover,
    nama: "Personal Web Portfolio",
    desk: "A modern and responsive personal portfolio website designed to showcase my projects, technical skills, certifications, and professional journey in web development and AI.",
    tools: ["React JS", "Vite", "Tailwind CSS", "AOS Animate"],
    github_link: "https://github.com/SuryaDarma4k/Portfolio", // Pastikan tautan repo GitHub Anda akurat
    live_link: "https://suryadarma.vercel.app/", // Ini adalah URL Vercel yang akan kita buat
    dad: "300", // Delay animasi agar muncul paling akhir
  },
  // {
  //   id: 4,
  //   gambar: Proyek4,
  //   nama: "Website Course",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
  //   dad: "500",
  // },
  // {
  //   id: 5,
  //   gambar: Proyek5,
  //   nama: "Web Portfolio",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
  //   dad: "600",
  // },
  // {
  //   id: 6,
  //   gambar: Proyek6,
  //   nama: "Company Profile 2.0",
  //   desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
  //   tools: ["NextJS", "TailwindCSS", "Framermotion"],
  //   dad: "700",
  // },
];

import Sertif1 from "/assets/certificates/BWA-Web Booking Flight Tickets.jpg";
import Sertif2 from "/assets/certificates/BWA-RentalBarangApp.jpg";
import Sertif3 from "/assets/certificates/AI Ethics.jpg";
import Sertif4 from "/assets/certificates/Belajar Dasar AI.jpg";
import Sertif4_2 from "/assets/certificates/Belajar Dasar AI_p2.jpg";
import Sertif5 from "/assets/certificates/Belajar Dasar Cloud dan Gen AI di AWS.jpg";
import Sertif5_2 from "/assets/certificates/Belajar Dasar Cloud dan Gen AI di AWS_p2.jpg";
import Sertif5_3 from "/assets/certificates/Belajar Dasar Cloud dan Gen AI di AWS_p3.jpg";
import Sertif6 from "/assets/certificates/Introduction to Artificial Intelligence.jpg";
import Sertif7 from "/assets/certificates/Introduction to Generative AI.jpg";
import Sertif8 from "/assets/certificates/Memulai Pemrograman dengan Python.jpg";
import Sertif8_2 from "/assets/certificates/Memulai Pemrograman dengan Python_p2.jpg";
import Sertif8_3 from "/assets/certificates/Memulai Pemrograman dengan Python.jpg";
import Sertif9 from "/assets/certificates/Spec-Driven Development dengan Kiro_page-0001.jpg"
import Sertif9_2 from "/assets/certificates/Spec-Driven Development dengan Kiro_page-0002.jpg"
import Sertif9_3 from "/assets/certificates/Spec-Driven Development dengan Kiro_page-0003.jpg"

export const listSertif = [
  {
    id: 1,
    gambar: Sertif1,
    halaman: [Sertif1],
    nama: "Web Booking Flight Tickets",
    penerbit: "BuildWithAngga",
    skills: ["Laravel 11", "Filament"],
    dad: "100",
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: "Web Dev: Sewa Barang App",
    halaman: [Sertif2],
    penerbit: "BuildWithAngga",
    skills: ["Laravel 11", "Filament", "MySQL"],
    dad: "200",
  },
  {
    id: 3,
    gambar: Sertif8, // Saya letakkan Python di atas karena jam belajarnya sangat masif (60 Jam)
    nama: "Memulai Pemrograman dengan Python",
    halaman: [Sertif8, Sertif8_2, Sertif8_3],
    penerbit: "Dicoding Academy",
    skills: ["Python", "Jupyter", "Google Colab"],
    dad: "300",
  },
  {
    id: 4,
    gambar: Sertif4,
    nama: "Belajar Dasar AI",
    halaman: [Sertif4, Sertif4_2],
    penerbit: "Dicoding Academy",
    skills: ["Machine Learning", "Deep Learning"],
    dad: "400",
  },
  {
    id: 5,
    gambar: Sertif5,
    nama: "Dasar Cloud & Gen AI di AWS",
    halaman: [Sertif5, Sertif5_2, Sertif5_3],
    penerbit: "Dicoding Academy",
    skills: ["AWS Cloud", "Generative AI", "Networking"],
    dad: "500",
  },
  {
    id: 6,
    gambar: Sertif7, 
    nama: "Introduction to Generative AI",
    halaman: [Sertif7],
    penerbit: "IBM SkillsBuild",
    skills: ["Generative AI", "LLM"],
    dad: "600",
  },
  {
    id: 7,
    gambar: Sertif6,
    nama: "Introduction to Artificial Intelligence",
    halaman: [Sertif6],
    penerbit: "IBM SkillsBuild",
    skills: ["Artificial Intelligence"],
    dad: "700",
  },
  {
    id: 8,
    gambar: Sertif3,
    halaman: [Sertif3],
    nama: "AI Ethics",
    penerbit: "IBM SkillsBuild",
    skills: ["AI Ethics", "Compliance"],
    dad: "800",
  },
  {
    id: 9,
    gambar: Sertif9,
    halaman: [Sertif9, Sertif9_2, Sertif9_3],
    nama: "Spec Driven Development dengan Kiro",
    penerbit: "DiCoding",
    skills: ["Prompt Engineering", "Web Development", "Spec-Driven Development (SDD)"],
    dad: "900",
  },
];