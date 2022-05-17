import SingleSonnet from "../SingleSonnet/SingleSonnet"
import { ISonnets } from '../../App'
import './SonnetsList.scss'
import { ChangeEvent, useState } from "react"

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'

type Number = {
    f: number;
    s: number
}


function SonnetsList({ sonnets }: { sonnets: ISonnets[] }): JSX.Element {
    const [change, setChange] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    const [page, setpage] = useState<number>(1)

    const [count, setCount] = useState<Number>({ f: 1, s: 22 })


    const changeCountLeft: React.MouseEventHandler<SVGElement> = (): void => {
        if (count.s !== 22) {
            setCount({ f: count.f - 22, s: count.s - 22 })
            setpage(prev => prev - 1)
        }
    }

    const changeCountRight: React.MouseEventHandler<SVGElement> = (): void => {
        if (count.s !== 154) {
            setCount({ f: count.s + 1, s: count.s + 22 })
            setpage(prev => prev + 1)
        }
    }

    return (
        <>
            {/* <button onClick={() => setChange(!change)}>From text to numbers</button> */}

            <AiOutlineLeft className="left" onClick={changeCountLeft}>left</AiOutlineLeft>
            <AiOutlineRight className="right" onClick={changeCountRight}>right</AiOutlineRight>
            <div className="header">
                <input type="text" value={search}
                    onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                        setSearch(e.target.value)} placeholder='search'
                    className="input"
                />
                <p className="page" >{page} </p> 
                <p> /7</p>
            </div>
            <div className={change ? 'numbers' : 'list'}>




                {!search ? (sonnets.filter((item: ISonnets) =>
                    item.title.toLowerCase().includes(search.toLowerCase()) ||
                    item.string.toLowerCase().includes(search.toLowerCase()))
                    .filter((item: ISonnets) =>
                        item.number >= count.f && item.number <= count.s
                    )
                    .map((item: ISonnets): JSX.Element => {
                        return <SingleSonnet key={item.id} {...item} change={change} />
                    })) : (
                    sonnets.filter((item: ISonnets) =>
                        item.title.toLowerCase().includes(search.toLowerCase()) ||
                        item.string.toLowerCase().includes(search.toLowerCase()))
                        .map((item: ISonnets): JSX.Element => {
                            return <SingleSonnet key={item.id} {...item} change={change} />
                        })
                )

                }

            </div>
        </>
    )
}

export default SonnetsList