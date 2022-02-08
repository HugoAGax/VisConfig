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

<main>
  <div class="numberinput" component-type={cpt}>
    <CommonLabel {type} {name} />
    <CommonInput {type} {name} {value} />
  </div>
</main>

<style>
  .numberinput {
    position: relative;
    border: 1px solid var(--global-green);
    border-radius: 4px;
    padding: 1rem 0.75rem;
  }
</style>
