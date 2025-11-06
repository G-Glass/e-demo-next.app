import style from './login.module.css'
import { FormEvent } from 'react'
export default function Login() {
    return (
        <div className={`${style.Login}`}>
            <div className="flex bg-slate-100  p-8 rounded-[10] flex-col shadow-sm pt-8 items-center justify-center">
                <h1 className='font-bold text-xl font-[Times]'>Conecte-se ou Registe-se</h1>
                <div className='pt-8'>
                    <h1>Email address</h1>
                    <form action="">
                        <input type="email" name="mail" id="emal" placeholder='exemplonome@gmail.com' className='border-1 p-1 rounded-[15] font-bold text-black' />
                        <div className='text-center bg-blue-700 p-1 m-4 rounded-[15] text-white'><input type="submit" value="Continuar"  /></div>
                        <div className='text-center '>OU</div>

                        <div className='flex flex-col  p-1 font-bold  '>

                            <div className='flex justify-between m-1 p-2 bg-slate-50 rounded-[15] shadow-sm '>
                                <div className='bi bi-telephone  text-xl '></div>
                                <h1 className='flex items-center justify-center'>Entrar com telefone</h1>
                            </div>
                            <div className='flex  justify-between  m-1 p-2 bg-slate-50 rounded-[15] shadow-sm '>
                                <div className='bi bi-apple text-xl'></div>
                                <h1 className='pr-2 self-center'>Entrar com Apple</h1>
                            </div>
                            <div className='flex justify-between m-1 p-2 bg-slate-50 rounded-[15] shadow-sm '>
                                <div className='bi bi-twitter-x text-xl '></div>
                                <h1 className='pr-6'>Entrar com X</h1>
                            </div>
                            <div className='flex justify-between m-1 p-2 bg-slate-50 rounded-[15] shadow-sm '>
                                <div className='bi bi-google text-xl '></div>
                                <h1 className='self-center'>Entrar com Google</h1>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
