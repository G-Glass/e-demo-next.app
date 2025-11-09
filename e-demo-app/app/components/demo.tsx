import style from './demo.module.css'
import Image from 'next/image'

export default function Demo() {
    return (
        <div className={style.demo}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={style.caixa}>
                <div>
                    <Image src={"/ca2.png"} width={3000} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/ca1.png"} width={3000} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/cal1.png"} width={3000} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/sapato.png"} width={300} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/ca4.png"} height={110} width={300} alt='logo' />
                </div>
                <div>
                    <Image src={"/Gemini_Generated_Image_qxdq33qxdq33qxdq.png"} width={1000} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/v1.png"} width={300} height={110} alt='logo' />
                </div>
                <div>
                    <Image src={"/v2.png"} width={3000} height={110} alt='logo' />
                </div>
            </div>
        </div>
    )
}