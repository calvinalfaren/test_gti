import { CiCircleQuestion } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/home')
    }
    return (
        <section className='h-screen w-screen overflow-hidden'>
            <div className='bg-colorOne w-full h-[60vh] relative'>
                <div className='flex justify-between py-3 px-5'>
                    <img src="./assets/img/logo.png" width={"50px"} alt="logo" />
                    <p className='text-xs'><CiCircleQuestion className='inline text-2xl mb-1' /> Pusat Bantuan</p>
                </div>
                <div className='p-20'>
                    <h1 className='text-5xl font-[500]'>Selamat Datang di Solusi <br />Perangkat Lunak Farmasi</h1>
                    <p className='text-2xl'>Sistem Manajemen Apotek Online</p>
                </div>
                <div className='absolute bottom-5 z-10 right-0'>
                    <img src="./assets/img/doctor-img.png" width={"700px"} alt="bg-login" />
                    <hr className='text-slate-800' />
                </div>
                <div className='absolute w-full -top-64 left-96 '>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#CEF2F7" d="M11.8,-9.7C15.2,6.6,17.8,17.3,13.9,20.4C10,23.6,-0.4,19.2,-13,11.6C-25.6,3.9,-40.4,-7,-38.6,-21.2C-36.8,-35.3,-18.4,-52.6,-7.1,-50.3C4.2,-48,8.4,-26,11.8,-9.7Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className='absolute w-full -top-40 left-[40rem] '>
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#CEF2F7" d="M11.8,-9.7C15.2,6.6,17.8,17.3,13.9,20.4C10,23.6,-0.4,19.2,-13,11.6C-25.6,3.9,-40.4,-7,-38.6,-21.2C-36.8,-35.3,-18.4,-52.6,-7.1,-50.3C4.2,-48,8.4,-26,11.8,-9.7Z" transform="translate(100 100)" />
                    </svg>
                </div>
                <div className='absolute w-full -bottom-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b5dbff" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,149.3C480,171,600,245,720,229.3C840,213,960,107,1080,90.7C1200,75,1320,149,1380,186.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
            </div>
            <div className='bg-colorTwo w-full h-[40vh] text-center relative'>
                <h1 className='font-semibold mb-4' style={{fontSize: 25}}>Silahkan masuk kedalam akun anda dan kelola apotek anda</h1>
                <div className='w-80 mx-auto'>
                    <form>
                        <label className='relative'>
                            <p className='text-m font-semibold text-left text-gray-700'>EMAIL</p>
                            <input type={"text"} className="py-2 w-full rounded-md px-8 mb-4" placeholder='name@email.com' />
                            <span className='absolute -left-[9.5rem] bottom-0'><AiOutlineMail className='inline text-gray-400' /></span>
                        </label>
                        <label className='relative'>
                            <p className='text-m font-semibold text-left mt-2 text-gray-700'>PASSWORD</p>
                            <input type={"password"} className="py-2 w-full rounded-md px-8" placeholder='***********' />
                            <span className='absolute -left-[19.4rem] bottom-0'><RiLockPasswordLine className='inline text-gray-400' /></span>
                        </label>
                        <div className='flex justify-between mt-2'>
                            <div className='flex'>
                                <input type={"checkbox"} className="mr-1" />
                                <p className='text-xs text-gray-700'>Inget Saya</p>
                            </div>
                            <p className='text-red-700 text-xs cursor-pointer'>Lupa Password ?</p>
                        </div>
                        <button className='mt-2 py-1 bg-sky-600 w-full rounded-md text-gray-200 text-[500] hover:bg-sky-700' onClick={handleLogin}>Masuk</button>
                        <p className='mt-5'>Belum Registrasi ? Silahkan klik <Link to="/register"><span className='text-red-700 hover:text-red-800 cursor-pointer'>Daftar</span></Link> </p>
                    </form>
                </div>
            </div>
        </section>
    )
}