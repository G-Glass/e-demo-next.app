import style from './demo.module.css'
import Image from 'next/image'

export default function Demo() {
    return (
        <div className={style.demo}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={style.caixa}>
                <div className={style.itens}>
                    <Image src={"./file.svg"} height={105} width={55} alt='logo' />
                    <h1>Carro</h1>
                </div>
                <div className={style.itens}>
                    <Image src={"./window.svg"} height={105} width={55} alt='logo' />
                    <h1>Camisa</h1>
                </div>
                <div className={style.itens}>
                    <Image src={"./next.svg"} height={105} width={55} alt='logo' />
                    <h1>Calças</h1>
                </div>
                <div className={style.itens}>
                    <Image src={"./globe.svg"} height={105} width={55} alt='logo' />
                    <h1>Vestidos</h1>
                </div>
            </div>
        </div>
    )
}