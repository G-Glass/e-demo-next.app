import Navbar from "./components/navbar";
import Demo from "./components/demo";
import Footer from "./components/footer";
import style from './page.module.css'

export default function Home() {
  return (
    <main className={style.Main}>

      <header className={style.Navbar}>
        <Navbar />
      </header>

      <section className={style.Principal}>
        <Demo />
      </section>

      <footer className={`${style.customfooter} p-2  text-center`}>
        <Footer />
      </footer>

    </main>
  );
}
