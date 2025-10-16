"use client"
import { useState } from 'react'
import style from './navbar.module.css'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abreMenu = () => {
        setIsMenuOpen(isMenuOpen);
    };
    return (
        <div className={style.Navbar}>
            <div className={style.bar}>
                <h2 className={style.edemo}>e-build</h2>
                <i className="bi bi-bag-check-fill text-white bg-slate-950 p-1 text-xl"></i>
                <div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (<i className="bi bi-x-lg text-xls"></i>):(<i className="bi bi-list"></i>)}
                    </button>
                </div>
            </div>
            <div className={style.submenu}>
                {isMenuOpen &&
                    <div className={style.Menu}>
                        <div className='flex items-center justify-around  p-8 flex-col '>
                            <h1 className={`${style.categoria}`}>Categoria</h1>
                            <div className='w-[70%] bg-slate-200 rounded-[10] text-right pr-2 border-1'>
                                <i className="bi bi-search"></i>
                            </div>
                        </div>
                        <div className={style.item}>Camiste</div>
                        <div className={style.item}>Camisa</div>
                        <div className={style.item}>Calças</div>
                        <div className={style.item}>Calções</div>
                        <div className={style.item}>Sapatos</div>
                        <div className={style.item}>Vestidos</div>
                        <div className='pt-2'>
                            <h1 className={style.edemo}>e-build</h1>
                            <div className={`${style.termo} p-2`} >Termos. | privacidade.</div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}