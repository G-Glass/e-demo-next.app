"use client"
import { useState } from 'react'
import style from './navbar.module.css'
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const abreMenu = () => {
        setIsMenuOpen(isMenuOpen);
    };
    return (
        <div>
            <div className={style.bar}>
                <h2 className={style.edemo}>e-demo</h2>
                <i className="bi bi-bag-check-fill text-white bg-slate-950 p-1 text-xl"></i>
                <div>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? (<i className="bi bi-x-lg text-xls"></i>):(<i className="bi bi-list"></i>)}
                    </button>
                </div>
            </div>
            {isMenuOpen &&
                <div className={style.Menu}>
                    <h1 className='p-4 text-xl text-blue-900'>Categoria</h1>
                    <div className={style.item}>Camiste</div>
                    <div className={style.item}>Camisa</div>
                    <div className={style.item}>Calças</div>
                    <div className={style.item}>Calções</div>
                    <div className={style.item}>Sapatos</div>
                    <div className={style.item}>Vestidos</div>

                    <div className='pt-[60%]'>
                        <h1 className={style.edemo}>e-demo</h1>
                        <div>Termos. | privacidade.</div>
                    </div>
                </div>
            }
        </div>
    )
}