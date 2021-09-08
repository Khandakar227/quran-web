<script>
  import { onDestroy } from "svelte";
  import { DarkMode } from "../store";

  const updateMode = () => {
    DarkMode.update((m) => !!!m);
    localStorage.setItem("DarkMode", $DarkMode);
  };

  onDestroy(() => $DarkMode);
</script>

<mode>
  <label id="toggler" class="switch">
    <input
      id="darkmode_toggler"
      type="checkbox"
      on:click={() => updateMode()}
      checked={$DarkMode}
    />
    <span class="slider">
      <span class="light_mode">&#9788;</span>
      <span class="dark_mode">☾</span>
    </span>
  </label>
</mode>

<style>
  * {
    --mode-button-width: 60px;
    --mode-button-height: 30px;
  }
  /* mode {
    position: fixed;
    top: 91vh;
    left: 3vw;
  } */
  .light_mode {
    font-size: calc(var(--mode-button-height) - 3px);
    color: white;
    position: absolute;
    bottom: 2px;
    left: 0;
  }
  .dark_mode {
    font-size: calc(var(--mode-button-height) - 8px);
    color: white;
    position: absolute;
    top: 1px;
    right: 0px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: var(--mode-button-width);
    height: var(--mode-button-height);
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #616161;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    font-size: 1rem;
    border-radius: 1pc;
    box-shadow: 1px 2px 5px 1px black;
  }
  .slider:after {
    position: absolute;
    content: "";
    height: calc(var(--mode-button-height) - 8px);
    width: calc(var(--mode-button-height) - 8px);
    left: 4px;
    bottom: 4px;
    border-radius: 2pc;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: var(--primary);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:after {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }
</style>
