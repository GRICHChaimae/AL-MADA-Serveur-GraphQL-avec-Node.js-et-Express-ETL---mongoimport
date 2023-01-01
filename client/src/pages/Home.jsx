import React from 'react'
import AddDell from '../components/AddDell'
import Dells from '../components/Dells'

export default function Home() {
    return (
        <>
            <div className="d-flex gap-3 mb-4">
                <AddDell />
            </div>
            <Dells />
        </>
    )
}
