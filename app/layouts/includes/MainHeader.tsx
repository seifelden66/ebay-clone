import { ReactNode, useState, ChangeEvent, MouseEvent } from "react";
import { debounce } from "debounce";
import Link from "next/link";
import { AiOutlineSearch } from 'react-icons/ai'
import { BiLoaderCircle } from 'react-icons/bi'

interface Product {
  id: number;
  url: string;
  title: string;
  price: number;
}

export default function MainLayout() {

    const [items, setItems] = useState<Product[]>([])
    const [isSearching, setIsSearching] = useState<boolean | null>(null)

    const handleSearchName = debounce(async (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (value === "") {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            const response = await fetch(`/api/products/search-by-name/${value}`)
            const result = await response.json()

            if (result) {
                setItems(result)
                setIsSearching(false)
                return
            }
            setItems([])
            setIsSearching(false)
        } catch (error) {
            console.error(error)
            alert(error)
        }
    }, 500) as (event: ChangeEvent<HTMLInputElement>) => void;
    
    return (
        <>
            <div id="MainHeader" className="border-b">
                <nav className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                    <div className="flex items-center w-full bg-white">
                        <div className="flex lg:justify-start justify-between gap-2 max-w-[1150px] w-full px-3 py-5 mx-auto">
                            <Link href="/">
                                <img alt="img" width="120" src="/images/logo.svg" />
                            </Link>

                            <div className="w-full">
                                <div className="relative">
                                    
                                    <div className="flex items-center">
                                        <div className="relative flex items-center border-2 border-gray-900 w-full p-2">
                                            
                                            <div className="flex items-center">
                                                <AiOutlineSearch size={22}/>
                                            </div>

                                            <input 
                                                className="
                                                    w-full
                                                    placeholder-gray-400
                                                    text-sm
                                                    pl-3
                                                    focus:outline-none
                                                "   
                                                onChange={handleSearchName}
                                                placeholder="Search for anything"
                                                type="text"
                                            />

                                            {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : null}
                                        
                                            {items.length > 0 ?
                                                <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                                                    {items.map((item) => (
                                                        <div className="p-1" key={item.id}>
                                                            <Link 
                                                                href={`/product/${item?.id}`}
                                                                className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                                            >
                                                                <div className="flex items-center">
                                                                    <img alt="img" className="rounded-md" width="40" src={item?.url+'/40'} />
                                                                    <div className="truncate ml-2">{ item?.title }</div>
                                                                </div>
                                                                <div className="truncate">£{ (item?.price / 100).toFixed(2) }</div>
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            : null}

                                        </div>

                                        <button 
                                            className="flex items-center bg-blue-600 text-sm font-semibold text-white p-3 ml-2 px-5"
                                            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                                                e.preventDefault();
                                                // Add search functionality here if needed
                                            }}
                                        >
                                            Search
                                        </button>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
