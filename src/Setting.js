import React,{useState} from 'react'
import {SettingOutlined,CloseCircleFilled,RightOutlined} from '@ant-design/icons'

export default function Setting({onClick, keyFunction}) {
    const [Settings, setSettings] = useState(false)
    const [Credit, setCredit] = useState(false)
    const [Fonts, setFonts] = useState(false)
    const showSettings = ()=>{setSettings(!Settings)}
    const hideCredit=()=>{setCredit(false)}
    const showCredit=()=>{setCredit(true)}
    const displayFonts=()=>{setFonts(!Fonts)}
    Credit? document.body.removeEventListener('keydown', keyFunction):document.body.addEventListener('keydown', keyFunction)
    const handleFont=(e)=>{
        let arabic = document.querySelector('.arabic')
        let savedFont = `lead arabic text-right mt-1 ${e.target.classList[1]}`
        arabic.className =`lead arabic text-right mt-1 ${e.target.classList[1]}`
        localStorage.setItem('ArabicFont', savedFont)
    }
    return (
        <div className="position-fixed setting-div">
            <SettingOutlined className=" setting p-2" onClick={showSettings} />
            {Settings && <div id="AllSettings" style={{bottom: '60px'}} className="bg-light pt-2 rounded text-center position-absolute botom-0" >
                <input onClick={onClick} type="checkbox" id="switch" className="checkbox" />  <label htmlFor="switch" className="toggle">
                    <p><span style={{float:'left',fontSize: '21px',borderRadius: '2pc',backgroundColor: 'grey',padding:'3px'}}>
                        &#9728;&#65039;</span>    <span style={{float:'right',fontSize: '21px',borderRadius: '2pc',backgroundColor: 'black',padding:'3px'}}>&#127769;</span></p></label> 
                <button type="button" onClick={displayFonts} className="btn border w-100"> Arabic font <RightOutlined className="float-right"/></button>
                <div style={{display: Fonts?'block':'none'}} className="arabic-fonts w-100 position-absolute">
                    <button onClick={(e)=>handleFont(e)} className="btn DejaVu border w-100"> Deja Vu (الٓمٓ)</button>
                    <button onClick={(e)=>handleFont(e)} className="btn Harmattan border w-100"> Harmattan (الٓمٓ)</button>
                    <button onClick={(e)=>handleFont(e)} className="btn monospace border w-100"> monospace (الٓمٓ)</button>
                    <button onClick={(e)=>handleFont(e)} className="btn Amiri w-100 border"> Amiri (الٓمٓ)</button>
                    <button onClick={(e)=>handleFont(e)} className="btn Reem w-100 border"> Reem Kufi (الٓمٓ)</button>
                    <button onClick={(e)=>handleFont(e)} className="btn El w-100 border"> El Messiri (الٓمٓ)</button>
                </div>
                <button type="button" onClick={showCredit} className="btn border w-100"> Credits</button>
                {Credit && <div id="CreditBox" className="position-fixed text-justify p-5 w-100 h-100" style={{top: '0%',backgroundColor: 'rgba(255,255,255,0.8)',left: '0'}}>
                <p className="text-right" ><CloseCircleFilled onClick={hideCredit} style={{fontSize: '2rem',cursor:'pointer'}}/></p>
                  <h4>
                    Assalamu Alaikum<br/><br/>
                    This web app is developed by: A fellow Bangladeshi muslim and was made possible by the will of Allah (Glory be unto Him).<br/><br/>
                    Complete database was collected from <a style={{color:'#dc3545'}} href="https://alquran.cloud/api"> https://alquran.cloud/api</a><br/><br/>
                    Word translations were collected from <a style={{color:'#dc3545'}} href="https://quranwbw.com">https://quranwbw.com</a><br/><br/>
                    Project's source code can be found on <a style={{color:'#dc3545'}} href="https://github.com/Khandakar227/quran-web">Github</a><br/><br/>
                    JazakAllahu Khairan for reading.... 
                    </h4>
                </div>}
            </div>}
        </div>
    )
}