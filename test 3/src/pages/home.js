import { BsQuestionCircle } from 'react-icons/bs'
import { AiOutlineLogout, AiOutlineMail } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { GiProgression } from 'react-icons/gi'
import { TiDocumentText } from 'react-icons/ti'
import { RiHandCoinLine } from 'react-icons/ri'
import { MdOutlineArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import ChartSales from '../components/chart-sales'
import PieChart from '../components/pie-chart'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Home() {
    return (
        <>
            <nav className="bg-white p-2 w-full z-10">
                <div className='flex items-center justify-end px-5 gap-3'>
                    <BsQuestionCircle className='text-xl mb-1' />
                    <AiOutlineMail className='text-2xl mb-1' />
                    
                    {/* <button type="button" class="flex flex-row content-start items-center hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        <div className='w-8 h-8 bg-gray-300 rounded-full mr-3'></div>
                        <div className='font-[500] flex flex-col items-start'>
                            <p className=' text-gray-700'>Roman Dimitri</p>
                            <p className='text-gray-700 text-xs mt-0'>owner</p>
                        </div>
                    </button> */}
                    
                    <Menu as="div" className="relative inline-block text-left">
                        {/* <div> */}
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
                                <div className='w-8 h-8 bg-gray-300 rounded-full mr-3'></div>
                                <div className='font-[500] flex flex-col items-start'>
                                    <p className=' text-gray-700'>Roman Dimitri</p>
                                    <p className='text-gray-700 text-xs mt-0'>owner</p>
                                </div>
                            </Menu.Button>
                        {/* </div> */}

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                <div class="py-1 flex items-center" role="none">
                                    <AiOutlineLogout className='mx-4 text-lg' />
                                    <a href="/" class="text-gray-700 block w-full pr-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</a>
                                </div>
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {/* <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1 flex items-center" role="none">
                        <AiOutlineLogout className='mx-4 text-lg' />
                        <a href="/" class="text-gray-700 block w-full pr-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</a>
                    </div>
                </div> */}
            </nav>
            <div className='py-7 px-5'>
                <div>
                    <h1 className='text-gray-700 font-bold text-xl mb-2'>Order Statistic</h1>
                    <div className='w-100 grid grid-cols-4 gap-3'>
                        <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                            <div>
                                <p className='font-bold text-xs text-gray-700'>Total Selling</p>
                                <p className='font-bold text-2xl text-gray-700 mt-3'>890</p>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <IoIosArrowUp className='text-xl text-sky-500' />
                                <p className='font-bold text-sky-500'>20.5%</p>
                            </div>
                        </div>
                        <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                            <div>
                                <p className='font-bold text-xs text-gray-700'>Expired Inventory</p>
                                <p className='font-bold text-2xl text-gray-700 mt-3'>5</p>
                            </div>
                        </div>
                        <div className='w-full bg-white px-5 py-2 rounded-lg ring-2 ring-sky-50 flex justify-between'>
                            <div>
                                <p className='font-bold text-xs text-gray-700'>Out of stock Inventory</p>
                                <p className='font-bold text-2xl text-gray-700 mt-3'>12</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full mt-5 grid grid-cols-3 gap-3'>
                    <div className='col-span-2 bg-white border-2 border-slate-200 gap-5 rounded-lg px-5 py-3'>
                        <div className='flex justify-between items-end'>
                            <h1 className='font-bold text-gray-700 text-xl'>Sales and Purchase</h1>
                            <BsThreeDotsVertical className='text-lg text-gray-700' />
                        </div>
                        <div className='bg-black p-1 w-16 flex mx-auto rounded-md items-center'>
                            <FiArrowUpRight className='text-green-600 text-sm' />
                            <p className='text-white text-xs ml-1'>23.5%</p>
                        </div>
                        <div className='grid grid-cols-12 gap-3 mt-2'>
                            <ChartSales />
                        </div>
                        <div className='flex justify-between mt-10'>
                            <div className='flex justify-start'>
                                <div className='text-center'>
                                    <p className='text-gray-700 text-sm font-semibold'>Target</p>

                                    <p className='text-green-400 text-xs font-semibold'> <MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />231</p>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <div className='text-center'>
                                    <p className='text-gray-700 text-sm font-semibold'>Last Week</p>
                                    <p className='text-red-400 text-xs font-semibold'><MdArrowDropDown className='text-red-400 mx-auto text-lg inline' />232</p>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <div className='text-center'>
                                    <p className='text-gray-700 text-sm font-semibold'>Last Month</p>
                                    <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />2314</p>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <div className='text-center'>
                                    <p className='text-gray-700 text-sm font-semibold'>This Year</p>
                                    <p className='text-green-400 text-xs font-semibold'><MdOutlineArrowDropUp className='text-green-400 mx-auto text-lg inline' />8126</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-rows-3 gap-2'>
                        <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                            <GiProgression className='text-5xl text-blue-500' />
                            <div className='text-right'>
                                <p className='font-bold text-xs text-gray-700'>Total Transaksi</p>
                                <p className='text-lg text-gray-700 font-bold'>Rp. 80.000.000</p>
                            </div>
                        </div>
                        <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                            <TiDocumentText className='text-5xl text-blue-500' />
                            <div className='text-right'>
                                <p className='font-bold text-xs text-gray-700'>Sales</p>
                                <p className='text-lg text-gray-700 font-bold'>289</p>
                            </div>
                        </div>
                        <div className='w-full h-full bg-white border border-slate-200 rounded-lg flex px-5 justify-between items-center'>
                            <RiHandCoinLine className='text-5xl text-blue-500' />
                            <div className='text-right'>
                                <p className='font-bold text-xs text-gray-700'>Purchase</p>
                                <p className='text-lg text-gray-700 font-bold'>289</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full mt-5 grid grid-cols-2 gap-10'>
                    <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                        <div className='flex justify-between items-end mb-5'>
                            <p className='font-bold text-lg text-gray-700'>Inventory</p>
                            <BsThreeDotsVertical className='text-lg text-gray-700' />
                        </div>
                        <div className='px-2'>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>New Order</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Prepare Order</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>3</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Waiting Pickup</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>12</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Sent</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>9</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Cancel</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>7</div>
                            </div>
                            <div className='flex justify-between mb-2'>
                                <p className='text-gray-500 font-[500]'>Done</p>
                                <div className='w-7 h-7 bg-sky-300 flex justify-center items-center text-sky-900 font-bold rounded-md'>5</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white border-2 border-slate-200 px-5 py-2 rounded-lg'>
                        <div className='mb-5'>
                            <p className='font-bold text-lg text-gray-700'>Persentase Penjualan</p>
                            <PieChart/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}