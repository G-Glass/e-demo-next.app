import style from './footer.module.css'

export default function Footer() {
    return (
        <div>
            <h1 className={style.edemo}>e-build</h1>
            <h1 className={style.foot}>App & website developer </h1>
            <div className='flex items-center flex-col'>
                <h1 className={style.links}>Links | Contact</h1>
                <div>
                    <a href="/"  className='flex  items-center font-bold p-1'>
                    <i className="bi bi-person pr-1 text-xl text-blue-500 "></i>
                    <h1>Portifolio</h1>
                    </a>
                </div>
                <div>
                    <a href="/" className='flex items-center p-1 font-bold '>
                    <i className="bi bi-envelope-at pr-1"></i>
                    <h1>Email</h1>
                    </a>
                </div>
                <div>
                    <a href="/" className='flex items-center p-1 font-bold '>
                    <i className="bi bi-whatsapp pr-1"></i>
                    <h1>WhatSapp</h1>
                    </a>
                </div>
            </div>
        </div>
    )
}