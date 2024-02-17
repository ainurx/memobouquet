import Image from 'next/image'
import React from 'react'
import { Button } from 'react-bootstrap'

function Banner(){
    return (
        <div className='banner-wrapper'>
            <div className='position-relative'>
                <Image src='/img-banner.png' alt='Bouquet' width={400} height={400}/>
                <Button className='btn-banner position-absolute m-bg-primary'>Order</Button>
            </div>
            <div className='banner-text-wrapper'>
                <h4 className='active'><span className='c-primary'>memo</span>bouquet</h4>
                <h2 className='active'>For your every <br/>special moment</h2>
            </div>
        </div>
    )
}

export default Banner