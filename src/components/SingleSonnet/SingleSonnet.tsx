import { useState } from 'react'
import { ISonnets } from '../../App'
import './SingleSonnet.scss'

interface ISingleSonnet extends ISonnets { }

function SingleSonnet({ title, lines }: ISingleSonnet): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
            <div className='single' onClick={() => setOpen(!open)}>

                <p>{title}</p>

                {open && <div className='single__popup'><div className='single__popup-text'>
                    {lines.map((item) => {
                        return <p>{item}</p>
                    })}</div></div>}
            </div>
        </>
    )
}

export default SingleSonnet