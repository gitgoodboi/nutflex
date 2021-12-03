import React from 'react'
import Row from './Row'
import useSWR from 'swr'
import fetcher from './fetcher'
import requests from './requests'

function Banner(props) {
    console.log(props)
    const { data, error } = useSWR({}, fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <header> 
            {/* <<< Background image */}
        </header>
    )
}

export default Banner
