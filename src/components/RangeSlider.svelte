<script>
  import { Theme } from "../store";

  function changeTheme(e) {
    Theme.update(() => e.target.value);
    localStorage.setItem("theme", $Theme)
  }

</script>

<small
  style="display: flex; gap: 5px; align-items: center;"
>
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 40.000000 40.000000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M138 351 c-54 -18 -97 -52 -117 -95 -26 -53 -26 -79 0 -133 37 -76
144 -119 237 -94 56 15 71 44 52 101 -17 50 -7 61 25 30 53 -50 83 16 45 96
-37 76 -156 122 -242 95z m152 -33 c53 -27 90 -78 90 -124 0 -39 -9 -42 -35
-14 -40 45 -71 13 -53 -54 16 -61 0 -78 -79 -83 -141 -10 -239 115 -170 218
29 44 98 79 157 79 28 0 63 -9 90 -22z"
      />
      <path
        d="M190 304 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3
32 -7 9 -16 16 -20 16 -4 0 -13 -7 -20 -16z m30 -14 c0 -5 -4 -10 -10 -10 -5
0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
      />
      <path
        d="M110 284 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3
32 -7 9 -16 16 -20 16 -4 0 -13 -7 -20 -16z m30 -14 c0 -5 -4 -10 -10 -10 -5
0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
      />
      <path
        d="M50 224 c-11 -12 -10 -18 3 -32 16 -15 18 -15 34 0 13 14 14 20 3 32
-7 9 -16 16 -20 16 -4 0 -13 -7 -20 -16z m30 -14 c0 -5 -4 -10 -10 -10 -5 0
-10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z"
      />
      <path
        d="M190 145 c-26 -32 13 -81 48 -59 9 6 18 19 20 28 8 38 -43 61 -68 31z
m46 -16 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"
      />
    </g>
  </svg>
  Theme
</small>
<input
  type="range"
  min={0}
  max={360}
  value={$Theme}
  steps={1}
  on:change={(e) => changeTheme(e)}
/>

<style lang="scss">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  $primary: #e8e8e8;

  input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &:focus {
      outline: none;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }
    &::-moz-range-thumb {
      border: none;
    }
  }

  input[type="range"] {
    width: 100%;
    height: 10px;
    padding: 18px 15px;
    background: $primary;
    border-radius: 10px;
    box-shadow: -2px -2px 5px white, 2px 2px 5px rgba(black, 0.5);

    @mixin track-style {
      display: flex;
      align-items: center;
      height: 10px;
      border-radius: 10px;
      box-shadow: inset -2px -2px 8px white, inset 2px 2px 8px rgba(black, 0.5);
    }

    @mixin thumb-style {
      position: relative;
      top: -50%;
      width: 20px;
      height: 20px;
      background-color: $primary;
      background-image: linear-gradient(-45deg, rgba(white, 0.8), transparent);
      border-radius: 50%;
      box-shadow: -1px -1px 2px white, 1px 1px 2px rgba(black, 0.3);
    }
    &::-webkit-slider-runnable-track {
      @include track-style;
    }
    &::-webkit-slider-thumb {
      @include thumb-style;
    }
    &::-moz-range-track {
      @include track-style;
    }
    &::-moz-range-thumb {
      @include thumb-style;
    }
  }
</style>
