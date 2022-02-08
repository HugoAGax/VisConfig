<script lang="ts">
  import CommonInput from "./CommonInput.svelte";
  import "../../variables.css";
import CommonLabel from "./CommonLabel.svelte";

  export let type: string;
  export let value: string;
  export let name: string;
  export let cpt: string;

  let counter: number = 0;
</script>

  <div class="textinput" component-type={cpt}>
    <CommonLabel type={type} name={name} />
    <CommonInput type={type} name={name} value={value}/>
  </div>

<style>
  .textinput {
    position: relative;
    border: 1px solid var(--global-blue);
    border-radius: 4px;
    font-family: "IBM Plex Sans Thai Looped", sans-serif;
    padding: 1rem 0.75rem;
    margin: 0.5rem 0;
  }

  .textinput :global(.label) {
    color: var(--global-blue);
  }
  
</style>
