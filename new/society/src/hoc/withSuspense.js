import React, { Suspense } from 'react';
import Svg from '../components/common/svg/Svg';




export const withSuspense = (Component) => {
    <Suspense fallback={<Svg />}></Suspense>


    return (props) => {
        return <Suspense fallback={<Svg />}>
            <Component {...props} />
        </Suspense>
    }
}