<script>
  import {showCredit} from "../store";
</script>

<div
  id="CreditBox"
  class="text-justify p-5 h-100"
  style="background-color: rgba(255, 255, 255, 0.8);"
>
  <p class="text-right">
    <span
      on:click={() => showCredit.set(false)}
      role="img"
      aria-label="close-circle"
      tabindex="-1"
      class="anticon anticon-close-circle"
      style="font-size: 2rem; cursor: pointer;"
      ><svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="close-circle"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
        ><path
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
        /></svg
      ></span
    >
  </p>
  <h4 class="credit-section">
    Assalamu Alaikum<br /><br />This web app is developed by: A fellow
    Bangladeshi muslim and was made possible by the will of Allah (Glory be unto
    Him).<br /><br />Complete database was collected from
    <a href="https://alquran.cloud/api" style="color: rgb(220, 53, 69);">
      https://alquran.cloud/api</a
    ><br /><br />Word translations were collected from
    <a href="https://quranwbw.com" style="color: rgb(220, 53, 69);"
      >https://quranwbw.com</a
    ><br /><br />Project's source code can be found on
    <a
      href="https://github.com/Khandakar227/quran-web"
      style="color: rgb(220, 53, 69);">Github</a
    ><br /><br />JazakAllahu Khairan for reading....
  </h4>
</div>

<style>
  #CreditBox {
    font-size: x-large;
    font-weight: 500;
  }
  .text-justify {
    text-align: justify !important;
  }

  .p-5 {
    padding: 3rem !important;
  }
  .h-100 {
    height: 100vh !important;
  }
  .text-right {
    text-align: right !important;
  }
</style>
