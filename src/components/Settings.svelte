<script>
  import { ArabicFont, Theme, showCredit } from "../store";
  import DarkMode from "./darkMode.svelte";
  import RangeSlider from "./RangeSlider.svelte";

  export let fill = "white";
  export let className = null;

  const arabicFont = [
    "Hamarathan", "IBM Plex Sans Arabic", "Markazi Text", "Uthmani-Hafs"
  ]
  function changeFont(e) {
    ArabicFont.set(e.target.value);
    localStorage.setItem("ArabicFont", $ArabicFont);
  }
</script>

<div class="settings focus_container" style="filter: hue-rotate({$Theme}deg);">
  <div class="options focus_btn">
    <span tabindex="0">
      <DarkMode />
      <hr />
    </span>
    <span class="range-slider">
      <div>
        <RangeSlider />
      </div>
    </span>
    <hr />
    <div class="focus_container" style="text-align: start;">
      <small>Arabic font</small>
      <select class="font-selector" on:change={(e) => changeFont(e)}>
        <option value="">Select Arabic font</option>
        {#each arabicFont as font}
          <option value={font} selected={$ArabicFont === font}>{font}</option>
        {/each}
      </select>
      <hr/>
      <button style="width: 100%; border: none;" on:click={() => showCredit.set(true)}>
        Credits
      </button>
    </div>
  </div>
  <button class="settings_icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={className}
      {fill}
      viewBox="0 0 512 512"
      ><title>settings-tools</title><path
        d="M394.14,416.16l24.32-41.91a18.18,18.18,0,0,1,24.85-6.62L512,407.52a84.59,84.59,0,0,0-108.89-81.34,36.3,36.3,0,0,1-12-8.22l-84.81-88.25L430.48,105.59l50-20.27,20.26-50L471,5.64l-50,20.3-20.27,50L277.21,199.46,215.56,135.3a36.46,36.46,0,0,1-8.17-13.45A84.72,84.72,0,0,0,84.22,23.31l68.7,39.88A18.17,18.17,0,0,1,159.53,88l-24.3,41.91a18.21,18.21,0,0,1-24.88,6.6L41.67,96.66A84.65,84.65,0,0,0,150.58,178a36.21,36.21,0,0,1,11.94,8.18l62.69,65.24-13.75,13.75h0c-12.29-12.29-33.17-11.37-46.61,2.08L10.72,421.39C-2.73,434.84-3.64,455.69,8.66,468l29.71,29.69C50.65,510,71.52,509.09,85,495.63l154.11-154.1c13.44-13.44,14.37-34.32,2.06-46.61h0l13.17-13.17,11.15,11.6,0,0,72.65,75.62a36.06,36.06,0,0,1,8.15,13.45,84.72,84.72,0,0,0,123.17,98.5L400.76,441A18.12,18.12,0,0,1,394.14,416.16Z"
      /></svg
    >
  </button>
</div>

<style>
  * {
    --shadow: #000000ab;
    --slider-color: #e0e0e0;
  }
  button.settings_icon {
    border: none;
    border-radius: 2pc;
    padding: 10px;
    background-color: var(--primary);
    margin: 0 10px;
    color: white;
    box-shadow: 0px 0px 2px 0px;
  }
  .font-selector {
    width: 100%;
    border: none;
    display: flex;
    justify-content: space-between;
  }
  svg {
    width: clamp(20px, 3vw, 30px);
  }
  .options {
    left: clamp(70px, 3vw, 100px);
    position: absolute;
    margin-bottom: 1rem;
    padding: 5px;
    background-color: #e8e8e8;
    border-radius: 5px;
    filter: drop-shadow(2px 2px 2px var(--shadow));
    text-align: center;
  }
  .settings {
    position: relative;
    z-index: 1;
  }
  .range-slider {
    padding: 5px;
    display: flex;
  }
</style>
