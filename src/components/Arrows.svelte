<script>
import { onDestroy, onMount } from "svelte";

  import { SurahList, AyahNum, SurahNum, Theme } from "../store";

  onMount(() => {
    document.addEventListener("keydown", (e) => handleKeyPress(e))
  })
  onDestroy(() =>{
    document.removeEventListener("keydown", (e) => handleKeyPress(e))
  })

  function handleKeyPress(e) {
    if(document.activeElement.nodeName == "BODY") {
      if(e.code === "ArrowLeft" && !($SurahNum == 1 && $AyahNum == 1)) prevAyah()
      if(e.code === "ArrowRight" && !($SurahNum == 114 && $AyahNum == 6)) nextAyah()
    }
  }

  function nextAyah() {
    const MaxAyah = $SurahList[$SurahNum - 1].numberOfAyahs;

    if (+$AyahNum < +MaxAyah) AyahNum.update((e) => +e + 1);
    else if (+$AyahNum == +MaxAyah) {
      if ($SurahNum < 114) {
        SurahNum.update((e) => +e + 1);
        localStorage.setItem("SurahNumber", $SurahNum);
      }
      AyahNum.set(1);
    } else AyahNum.set(+MaxAyah);

    localStorage.setItem("VerseNumber", $AyahNum);
  }

  function prevAyah() {
    if (+$AyahNum > 1) AyahNum.update((e) => +e - 1);
    else if (+$AyahNum == 1) {
      if ($SurahNum > 1) {
        SurahNum.update((e) => +e - 1);
        localStorage.setItem("SurahNumber", $SurahNum);
      }

      AyahNum.set(+$SurahList[$SurahNum - 1].numberOfAyahs);
    } else AyahNum.set(1);
    localStorage.setItem("VerseNumber", $AyahNum);
  }
</script>
{#if !($SurahNum == 1 && $AyahNum == 1)}
<button style="filter: hue-rotate({$Theme}deg);" on:click={() => prevAyah()}>
  <svg viewBox="0 0 512 512">
    <path
      d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0    H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667    c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163    C449.687,490.858,447.852,481.685,441.751,475.584z"
    />
  </svg>
</button>
{/if}
{#if !($SurahNum == 114 && $AyahNum == 6)}
<button class="next" on:click={() => nextAyah()} style="filter: hue-rotate({$Theme}deg);">
  <svg viewBox="0 0 512 512">
    <path
      d="M441.751,475.584L222.166,256L441.75,36.416c6.101-6.101,7.936-15.275,4.629-23.253C443.094,5.184,435.286,0,426.667,0    H320.001c-5.675,0-11.093,2.24-15.083,6.251L70.251,240.917c-8.341,8.341-8.341,21.824,0,30.165l234.667,234.667    c3.989,4.011,9.408,6.251,15.083,6.251h106.667c8.619,0,16.427-5.184,19.712-13.163    C449.687,490.858,447.852,481.685,441.751,475.584z"
    />
  </svg>
</button>
{/if}

<style>
  svg {
    width: clamp(20px, 3vw, 30px);
    height: auto;
    fill: var(--light);
  }
  .next svg {
    transform: rotateZ(180deg);
  }
  button {
    position: fixed;
    top: 60vh;
    opacity: 0.7;
    background: var(--primary);
    box-shadow: 0px 0px 5px 0px #00000070;
    border-radius: 5px;
  }
  .next {
    right: 0;
  }
</style>
