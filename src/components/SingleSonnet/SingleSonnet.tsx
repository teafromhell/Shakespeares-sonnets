import { useState } from 'react'
import { ISonnets } from '../../App'
import './SingleSonnet.scss'

interface ISingleSonnet extends ISonnets {
    change: boolean;

}

function SingleSonnet({ title, lines, number, change }: ISingleSonnet):JSX.Element {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
            {!change ? (<div className='single' onClick={() => setOpen(!open)}>

                <p>{title}</p>
                
                {open && <div className='single__popup'><div className='single__popup-text'>
                    {lines.map((item) => {
                        return <p>{item}</p>
                    })}</div></div>}
            </div>) : (<div className='single' onClick={() => setOpen(!open)}>

                <p>{number}</p>
                {open && <div className='single__popup'><div className='single__popup-text'>
                    {lines.map((item):JSX.Element => {
                        return <p>{item}</p>
                    })}</div></div>}
            </div>)}
        </>
    )
}

export default SingleSonnet