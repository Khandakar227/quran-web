/* eslint-disable eqeqeq */
import React from 'react'
let savedFont = localStorage.getItem('ArabicFont') || "lead DejaVu arabic text-right mt-1";

export default function Ayah({Translation,TranslatedQuran,SurahNum, AyahNum, words}) {
    let Arabic = [];
    words.map((word,i)=>{
        return Arabic.push(<span className="arabicword position-relative" key={word.word_number_in_ayah}> {word.word_arabic}
        <span className="translated-word position-absolute"> {word.word_translation} </span>
        <span className="transliterated-word position-absolute"> {word.word_transliteration} </span>
         </span>)
    })
    let htmlString = `<div class="text-center mx-auto"><audio class="audio" controls><source src="https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/${TranslatedQuran.ayahs[AyahNum-1].number}"  type="audio/mpeg"/>Your browser does not support the audio element.</audio></div>`
   
    return (
        <>
        <h3 className="Surah-name text-center"> {TranslatedQuran.englishName} ({TranslatedQuran.englishNameTranslation})</h3>
        <span> {SurahNum}.{AyahNum}</span>
            <p className={savedFont}>
            {!Arabic?'LOADING':Arabic}</p>

        <p className="lead text-justify">{TranslatedQuran.ayahs[AyahNum-1].text}</p>
        <hr className="my-2"/>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        <p className="text-right"><small>Translation: {Translation.name}</small></p>
      </>
    )
}