"use client"
import { useState } from 'react'
import style from './navbar.module.css'
import LoginPage from '../login/page';
import Login from './login';
import Link from 'next/link';
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abreMenu = () => {
        setIsMenuOpen(isMenuOpen);
    };
    return (
        <div className={style.Navbar}>
            <div className={style.bar}>
                <h2 className={style.edemo}>e-demo</h2>
                <i className="bi bi-bag-check-fill text-white bg-slate-950 p-1 text-xl"></i>
                <div className={style.Abrirmenu}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (<i className="bi bi-x-lg text-xl"></i>):(<i className="bi bi-list text-xl"></i>)}
                    </button>
                </div>
                <Link href={"/login"} className=' flex items-center mr-1 flex-rows font-[Times] bg-[#2b2024]  text-white  rounded-[10]'>
                  <h2 className='p-1 bg-blue-700 rounded-[10]'>Login </h2>
                  <h2 className='p-1 bg-[#1a273a] rounded-r-[10]'>Registo</h2>
                </Link>
            </div>
            
            <div className={`${style.submenu}`}>
                {isMenuOpen &&
                    <div className={`${style.Menu} shadow-sm`}>
                        <div className='flex items-center justify-around  p-8 flex-col  '>
                            <h1 className={`${style.categoria} text-blue-800`}>Categoria</h1>

                            <form action="" className='flex items-center bg-slate-200 pl-1 pr-1 rounded-[20] border-1 hover:border-hidden shadow-sm'>
                                <input type="search" name="pesquise" id="procure" className=' pl-1 rounded-[10] border-hidden font-bold' placeholder='Pesquise aqui' />
                                <button className=' bi bi-search font-bold text-2xl pl-1 m text-green-800  ' ></button>
                            </form>
                        </div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Camiste</div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Camisa</div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Calças</div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Calções</div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Sapatos</div>
                        <div className="p-3 m-2 bg-slate-100 rounded-[15] shadow-sm font-bold ">Vestidos</div>
                        <div className='pt-2'>
                            <h1 className={style.edemo}>e-demo</h1>
                            <div className={`${style.termo} p-2`} >Termos. | privacidade.</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}