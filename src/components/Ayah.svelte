<script>
  import { ArabicFont } from "../store";

  export let ayah;

</script>

<p class="arabic-text" style="font-family: {$ArabicFont};">
  {#if ayah?.words}
    {#each ayah?.words as word}
      <span class="word position-relative">
        <span lang="ar" class="arabic">
          {word?.word_arabic}
        </span>
        <span class="translated"> {word?.word_translation} </span>
        <span class="transliterated">
          {word?.word_transliteration}
          <small style="margin-top: 4px;"> root: &nbsp; {word?.word_root}</small>
        </span>
      </span>
    {/each}
  {/if}
</p>

<style>
  .arabic-text {
    text-align: end;
  }
  .arabic {
    direction: rtl;
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    line-height: 1.5;
  }
  .translated,
  .transliterated {
    position: absolute;
    left: 0;
    color: var(--light);
    padding: 5px;
    border-radius: 5px;
    display: none;
    z-index: 1;
  }
  .transliterated {
    top: 30px;
    background-color: var(--primary);
  }
  .translated {
    bottom: 30px;
    background-color: var(--alpha);
  }
  .word:hover .transliterated {
    display: grid;
    width: max-content;
  }
  .word:hover .translated {
    display: block;
  }
</style>
