/* eslint-disable eqeqeq */
import React from 'react'
import BNQuran from "./quran-file/bengali-quran.json"
import ENQuran from './quran-file/en-sahih.json'
let savedFont = localStorage.getItem('ArabicFont') || "lead DejaVu arabic text-right mt-1";
export default function Ayah({Translation, SurahNum, AyahNum, words}) {
    let Arabic = [];
    words.map((word,i)=>{
        return Arabic.push(<span className="arabicword position-relative" key={word.word_number_in_ayah}> {word.word_arabic}
        <span className="translated-word position-absolute"> {word.word_translation} </span>
        <span className="transliterated-word position-absolute"> {word.word_transliteration} </span>
         </span>)
    })
    let TranslatedText = Translation==1? BNQuran.data.surahs:ENQuran.data.surahs
    return (
        <>
        <h3 className="Surah-name text-center">{
            TranslatedText[SurahNum-1].englishName} ({TranslatedText[SurahNum-1].englishNameTranslation})
            </h3>
        <span>{TranslatedText[SurahNum-1].number}. {TranslatedText[SurahNum-1].ayahs[AyahNum-1].numberInSurah}</span>
            <p className={savedFont}>
            {!Arabic?'LOADING':Arabic}</p>

        <p className="lead text-justify">{TranslatedText[SurahNum-1].ayahs[AyahNum-1].text}</p>
        <p className="text-right"><small>Translation: {Translation==1 ? BNQuran.data.edition.name:ENQuran.data.edition.name}</small></p>
        <hr className="my-2"/>
      </>
    )
}