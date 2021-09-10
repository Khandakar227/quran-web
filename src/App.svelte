<script>
  import { onMount } from "svelte";
  import {
    SurahList,
    TranslateTo,
    SurahNum,
    AyahNum,
    DarkMode,
    Theme,
    showCredit,
  } from "./store";
  import SurahSelector from "./components/SurahSelector.svelte";
  import axios from "axios";
  import { getAyah } from "../scripts/firebase";
  import Ayah from "./components/Ayah.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Loader from "./components/Loader.svelte";
  import Arrows from "./components/Arrows.svelte";
  import Settings from "./components/Settings.svelte";
  import Credit from "./components/Credit.svelte";

  $: url =
    $TranslateTo === 1
      ? "https://khandakar227.github.io/json-data/bengali-quran/"
      : "https://khandakar227.github.io/json-data/en-sahih/";

  $: document.body.style.filter = `drop-shadow(1px 2px 2px black) invert(${
    $DarkMode ? 1 : 0
  })`;

  onMount(async () => {
    const surahs = await getSurahList();
    SurahList.set(surahs);
  });

  async function getSurahList() {
    const { data } = await axios.get(
      "https://khandakar227.github.io/json-data/metadata/metadata.json"
    );
    return data;
  }

  async function fetchAyah(surahNumber, AyahNumber) {
    return await getAyah(surahNumber, AyahNumber);
  }
</script>

<svelte:head>
  <meta name="theme-color" content="#a33b20" />
</svelte:head>
<div
  class="text-center py1 m0 heading mb1"
  style="filter: hue-rotate({$Theme}deg);"
>
  <h1 lang="ar" class="ar m0" style="font-family: 'Uthmani-Hafs';">
    بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
  </h1>
  {#if $TranslateTo == 0}
    <p lang="en">
      Starting with the Name of Allah who is the most merciful and the most
      beneficial
    </p>
  {:else}
    <p lang="bn">শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।</p>
  {/if}
</div>

<Settings />

{#if $showCredit}
  <div style="position: fixed; top: 0; left: 0; z-index: 10; width: 100%;">
    <Credit />
  </div>
{/if}

<main style="filter: hue-rotate({$Theme}deg);">
  <container>
    <Navbar />
    <div class="jumbotron ayah mb1">
      <div class="container">
        <h2 class="text-center surahName">
          {`${$SurahList[$SurahNum - 1]?.englishName} (${
            $SurahList[$SurahNum - 1]?.englishNameTranslation
          })`}
        </h2>

        <span>{`${$SurahNum}.${$AyahNum}`}</span>

        {#await fetchAyah($SurahNum, $AyahNum)}
          <h2 class="text-center"><Loader /></h2>
        {:then ayah}
          <Ayah {ayah} />
        {/await}

        {#await axios.get(`${url}surahs/${$SurahNum}.json`)}
          <span>Loading</span>
        {:then { data }}
          <p class="Translation py1">{data.ayahs[$AyahNum - 1].text}</p>

          <div class="translatedby">
            {#await axios.get(`${url}edition/edition.json`)}
              <small>Loading..</small>
            {:then { data }}
              <small> Translation: {" "} {data.name}</small>
            {/await}
          </div>
          <hr />
          <div class="audio">
            <audio
              controls="controls"
              src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${
                data.ayahs[$AyahNum - 1].number
              }.mp3`}
              type="audio/mpeg"
            >
              Your browser does not support the HTML5 Audio.
            </audio>
          </div>
        {/await}

        <div class="Select">
          <SurahSelector />
        </div>
      </div>
    </div>
  </container>
</main>
<Arrows />

<style>
  main {
    display: grid;
    align-items: center;
    min-height: 70vh;
  }
  .heading {
    background-color: var(--primary);
    color: var(--light);
  }
  .Translation {
    font-weight: 400;
    font-size: clamp(1em, 3vw, 1.2em);
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .surahName {
    font-weight: 400;
  }
  .Select {
    gap: 5px;
    display: grid;
    grid-template-columns: auto 110px;
    justify-content: space-evenly;
    align-items: center;
  }
  .translatedby {
    text-align: end;
  }
  hr {
    border-top: 1px solid lightgray;
  }
  .audio {
    text-align: center;
    padding: 0.5rem 0;
  }
  audio {
    border: 1px solid var(--primary);
    border-radius: 2pc;
  }
</style>
