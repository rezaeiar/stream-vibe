import React from 'react'
import Header from '@/app/_components/modules/Header/Header'
import Pricing from '@/app/_components/modules/Pricing/Pricing'
import Plans from '@/app/_components/templates/Subscription/Plans/Plans'

export default function Subscription() {
    return (
        <>
            <Header />
            <Pricing />
            <Plans />
        </>
    )
}
