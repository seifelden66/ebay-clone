"use client"
import Image from 'next/image'
import Link from 'next/link'





export default function SubMenu() {
    const menuItems =[
        {id:1, name:'Home'},
        {id:2, name:'Saved'},
        {id:3, name:'Elctronics'} ,
        {id:4, name:'Motors'},
        {id:5, name:'Fashion'},
        {id:6, name:'Art'},
        {id:7, name:'Sports'},
        {id:8, name:'Health & Beauty'},
        {id:9, name:'Industrial Equipmen'},
        {id:10, name:'Home & Garden'},
        {id:11, name:'Sell'}
            ]
  return (
    <div id="SubMenu" className='border-b'>
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
            <ul id="Left" className="flex items-center
            text-[13px] text-[#333333] px-2 h-8">
                {menuItems.map((menuItem)=>(
                    <li className="px-3 hover:underline cursor-pointer" key="menuItem.id">
                    {menuItem.name}
                </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
