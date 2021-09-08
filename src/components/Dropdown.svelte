<script>
  import { TranslateTo } from '../store';

  function changeTranslation( n ) {
    TranslateTo.set( n );
    localStorage.setItem("TranslateTo", n);
  }
</script>

<div class="dropdown">
    <button class="dropbtn">Translate to</button>
    <div class="dropdown-content">
      <button class={`${$TranslateTo === 0 ? "active" : null}`} on:click={() => changeTranslation(0)}>English</button>
      <button class={`${$TranslateTo === 1 ? "active" : null}`} on:click={() => changeTranslation(1)}>Bangla</button>
    </div>
  </div>

<style>
    /* Style The Dropdown Button */
.dropbtn {
  background-color: var(--primary);
  color: var(--light);
  padding: 10px;
  font-size: 1em;
  border: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content button {
  color: black;
  margin: 0;
  padding: 12px 16px;
  text-decoration: none;
  width: 100%;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content button:focus-within {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:focus-within .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:focus-within .dropbtn {
  background-color: var(--alpha);
}
</style>