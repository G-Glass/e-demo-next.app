import style from './footer.module.css'

export default function Footer() {
    return (
        <div>
            <h1 className={style.edemo}>e-build</h1>
            <h1>App & website developer </h1>
            <div>
                <h1>Links | Contact</h1>
                <div><a href="/">Portifolio</a></div>
                <div><a href="/">Email</a></div>
                <div><a href="/">WhatSapp</a></div>
            </div>
        </div>
    )
}