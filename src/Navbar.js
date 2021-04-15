/* eslint-disable eqeqeq */
import React from 'react'

export default function Navbar({translation}) {
    return (
        <>
        <div id="bismillah" className="bg-danger text-white py-3 text-center">
          <h1 lang="ar" className="my-1">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</h1>  
          <p id="translatedNav" lang="en" className="mb-0" style={{display: translation!=1 ? 'block':'none'}}>Starting with the Name of Allah
           who is the most merciful and the most beneficial</p>
          <p id="translatedNav" lang="bn" className="mb-0 mt-2" style={{display: translation==1 ? 'block':'none'}}>শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</p>
        </div>
        </>
    )
}
