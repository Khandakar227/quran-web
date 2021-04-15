/* eslint-disable eqeqeq */
import React, { Component } from 'react'
import firebase from "./FireBaseConfig"
import "@firebase/database"
import Navbar from './Navbar'
import Setting from './Setting'
import Ayah from './Ayah'
import EnQ from './quran-file/en-sahih.json'
import {RightOutlined, LeftOutlined} from '@ant-design/icons'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ErrorBoundary from './ErrorBoundary'
let Surahs =EnQ.data.surahs
let SurahSelection = []
let AyahSelection=[]

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      SurahNum: +localStorage.getItem('SurahNumber')||1,
      AyahNum: +localStorage.getItem('VerseNumber') || 1,
      NumberofAyah: "",
      Translation: localStorage.getItem('TanslateTo')||1,
      words: [],
      darkMode: localStorage.getItem('DarkMode')|| false,
      ShowTranslations: false,
      Loading: true
    }
  }
  nextVerse = ()=>{
    if(this.state.AyahNum < Surahs[this.state.SurahNum-1].ayahs.length){
      this.setState({ AyahNum: this.state.AyahNum+1})
   } else if(this.state.AyahNum >= Surahs[this.state.SurahNum-1].ayahs.length){
    this.setState({ AyahNum: 1, SurahNum:this.state.SurahNum!==114 ? this.state.SurahNum+1 : 114})
    }
    
  }
  prevVerse = ()=>{
    if(this.state.AyahNum < Surahs[this.state.SurahNum-1].ayahs.length && this.state.AyahNum !== 1){
      this.setState({ AyahNum: this.state.AyahNum-1})
   } else if(this.state.AyahNum === 1){
    if(this.state.SurahNum<=1) this.setState({SurahNum:1})
    this.setState({ AyahNum: 1, SurahNum:this.state.SurahNum!==1 ? this.state.SurahNum-1 : 1})
    }
 }

 handleKeyDown=(event)=>{ 
  if(event.keyCode === 39) {
      this.nextVerse()
  } else if(event.keyCode === 37){
   this.prevVerse()
  }
}

gotoAyah = (e)=>{
  this.setState({AyahNum:+e.target.value})
  document.activeElement.blur()
}
gotoSurah = (e)=>{
  this.setState({SurahNum:+e.target.value})
  this.setState({AyahNum:1})
  document.activeElement.blur()
}

filterMode=()=>{
  this.setState({darkMode: !this.state.darkMode})
  localStorage.setItem('DarkMode', !this.state.darkMode)
}
showTr= ()=>{this.setState({ShowTranslations:!this.state.ShowTranslations})}
setBN=()=>{this.setState({Translation: 1})}
setEN=()=>{this.setState({Translation: 0})}

  async componentDidMount(){
    this.state.darkMode ==='true' ? this.setState({darkMode: true})  : this.setState({darkMode: false})
    let db = firebase.database().ref(`/${this.state.SurahNum}`).child(this.state.AyahNum)
    Surahs.map((Surah,i)=>{
      SurahSelection.push(<option key={i+1} value={i+1}>{`${Surah.number}. ${Surah.englishName} (${Surah.englishNameTranslation})`}</option>)
      return SurahSelection
    })
    for (let i=1; i<=Surahs[this.state.SurahNum-1].ayahs.length; i++){
      AyahSelection.push( <option key={i} value={i}>{i}</option>) 
      }
    db.once('value', snap => {
      let words = snap.val().words
      this.setState({words: words})
      this.setState({Loading: false})
    })
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

   componentDidUpdate(prevProps,prevState){
    localStorage.setItem('TanslateTo', this.state.Translation)
    if(this.state.SurahNum!==prevState.SurahNum || this.state.AyahNum!==prevState.AyahNum){
      localStorage.setItem('SurahNumber', this.state.SurahNum)
      localStorage.setItem('VerseNumber', this.state.AyahNum)
      localStorage.setItem('TanslateTo', this.state.Translation)
      this.setState({Loading: true})
      let db = firebase.database().ref(`/${this.state.SurahNum}`).child(this.state.AyahNum)
      db.once('value', snap => {
        let words = snap.val().words
        this.setState({words: words})
        this.setState({Loading: false})
      })
      if(this.state.SurahNum!==prevState.SurahNum){
        AyahSelection=[];
          for (let i=1; i<=Surahs[this.state.SurahNum-1].ayahs.length; i++){
          AyahSelection.push( <option key={i} value={i}>{i}</option>) 
          }}
    }
  }
  keyDisable = ()=>document.body.removeEventListener('keydown', this.handleKeyDown)

  render() {
    return (
      <>
      <Navbar translation={this.state.Translation}/>
      <div className="position-absolute text-container">
      <div className="dropdown open">
                <button className="btn btn-danger dropdown-toggle" type="button" onClick={this.showTr}> Translate to </button>
                <div className="dropdown-menu" style={{display:this.state.ShowTranslations?'block':'none'}}>
                    <button className="dropdown-item" onClick={this.setBN}
                      style={{color: this.state.Translation==1 ? 'white':'black',
                      backgroundColor: this.state.Translation==1 ? '#dc3545':'transparent'
                      }}>Bangla</button>
                    <button className="dropdown-item" onClick={this.setEN}
                    style={{color: this.state.Translation!=1 ? 'white':'black',
                    backgroundColor: this.state.Translation!=1 ? '#dc3545':'transparent'
                    }}>English</button>
                </div>
            </div>
      <div style={{filter: this.state.darkMode? 'invert(1)': 'unset'}} className="jumbotron">
       <p style={{top:'25%', left:'0',right:'0',fontWeight:'bold', display: this.state.Loading? 'block':'none'}} className="position-absolute text-center text-danger">
         <span className="spinner-grow text-danger"></span> Loading...<br/> If loading is taking too long try refreshing again.</p>

       <Ayah words={this.state.words} SurahNum={this.state.SurahNum} AyahNum={this.state.AyahNum}
       Translation={this.state.Translation}
       />

        <div className="text-center mt-3">
                <span className="mx-2">Verse:</span>
                <select className="custom-select VerseSelect"
                 name="Verse" id="verses"
                 onChange={(e)=>this.gotoAyah(e)}
                 onFocus={this.keyDisable}
                  value={this.state.AyahNum}>
                  {AyahSelection?AyahSelection:null}
                </select> 
                <span className="mx-2">Chapter:</span> 
                <select className="custom-select ChapterSelect"
                 name="Verse" id="verses"
                 onFocus={this.keyDisable}
                 onChange={(e)=>this.gotoSurah(e)}
                  value={this.state.SurahNum}>
                  {SurahSelection?SurahSelection:null}
                </select>
        </div>
     <span onClick={()=>this.nextVerse()}
              className="position-fixed next pb-2"><RightOutlined /></span>
        <span onClick={()=>this.prevVerse()}
              className="position-fixed prev pb-2"><LeftOutlined /></span>
       </div>
       </div>
       <Setting onClick={()=>this.filterMode()} keyFunction={this.handleKeyDown}/>
      </>
    )
  }
}

export default function AppWithErrorBoundary({props}){
  return(
  <ErrorBoundary>
    <App {...props} />  
  </ErrorBoundary>
)
}