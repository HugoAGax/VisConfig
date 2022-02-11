<script lang="ts">
  import CommonInput from "./CommonInput.svelte";
  import CommonLabel from "./CommonLabel.svelte";
  import FormUnit from "./FormUnit.svelte";
  import "../../variables.css";

  export let type: string;
  export let value: string;
  export let name: string;
</script>

<FormUnit className={"checkbox"} borderColor={'hsl(25, 95%, 53%)'}>
  <CommonLabel {type} {name} />
  <CommonInput {type} {name} {value} />
</FormUnit>

<style>
  :global(.checkbox) {
    position: relative;
    border-color: var(--global-orange);
    padding: 1rem 0.75rem;
  }

  :global(.checkbox .label) {
    color: var(--global-orange);
  }
</style>
