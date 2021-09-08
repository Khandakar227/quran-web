<script>
  import { SurahList, SurahNum, AyahNum } from "../store";

  $:changeSurah = (e) => {
    SurahNum.set(+e.target.value);
    localStorage.setItem("SurahNumber", e.target.value)
    AyahNum.set(1);
    localStorage.setItem("VerseNumber", 1)
  }
  $:changeAyah = (e) => {
    AyahNum.set(+e.target.value);
    localStorage.setItem("VerseNumber", e.target.value)
  }
  
</script>

<div style="display: flex;align-items: baseline;gap: 5px;">
  <h4> Surah: </h4>
  <select name="surah" on:change={(e)=> changeSurah(e)}>
    {#if $SurahList}
      {#each $SurahList as Surah}
        <option value={Surah.number} selected={Surah?.number == $SurahNum}>
          {`${Surah.number}. ${Surah.englishName} (${Surah.englishNameTranslation})`}
        </option>
      {/each}
    {/if}
  </select>
</div>

<div style="display: flex;align-items: baseline;gap: 5px;max-width: 300px;">
  <h4> Verse: </h4>
  <select name="ayah" on:change={(e)=> changeAyah(e)}>
    {#if $SurahList}
      {#each new Array(parseInt($SurahList[$SurahNum - 1]?.numberOfAyahs) || 1) as _, i}
      <option value={i + 1} selected={(i+1) == $AyahNum}>
        {i + 1}
      </option>
      {/each}
    {/if}
  </select>
</div>


<style>
    select{
        width: 100%;
    }
</style>