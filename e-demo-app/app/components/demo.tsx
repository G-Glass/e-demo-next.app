import style from './demo.module.css'
import Image from 'next/image'

export default function Demo() {
    return (
        <div className={style.demo}>
            <h1 className={style.titulo_colorido}>Construa, vende, compre no melhor lugar com melhores preços do mercado</h1>

            <div className={style.caixa}>

                <div className={`${style.container} `}>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                </div>

                <div className={`${style.conatiner}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div className={`${style.container}`}>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                </div>

                <div className={`${style.container}`}>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                    <div className={`${style.container2} flex items-center flex-col `}>
                      <Image src={"/globe.svg"} width={75} height={100} alt='logo' className='p-1' />
                      <div className='p-1 bg-[#3fcf9]'>
                        <h1>Globe</h1>
                        <h2 className=' text-white p-1 rounded-[10] bg-[#124e96]'>Ver detalhes</h2>
                      </div>
                    </div>
                </div>

                <div className={`${style.conatiner}`}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}