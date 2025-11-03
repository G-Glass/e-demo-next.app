import style from './demo.module.css'

export default function Demo() {
    return (
        <div className={style.demo}>
            <h1>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={style.caixa}>
                <div className={style.itens}>Carro</div>
                <div className={style.itens}>Camisa</div>
                <div className={style.itens}>Calças</div>
                <div className={style.itens}>Vestidos</div>
            </div>
        </div>
    )
}