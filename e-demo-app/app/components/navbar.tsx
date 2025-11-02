import style from './navbar.module.css'
export default function Navbar() {
    return (
        <div className={style.Navbar}>
            <h2 className={style.bar}>e-demo</h2>
            <i className="bi bi-bag-check-fill text-white bg-slate-950 p-1 text-xl"></i>
            <i className="bi bi-list text-xl"></i>
        </div>
    )
}