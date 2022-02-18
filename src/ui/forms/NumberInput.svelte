<script lang="ts">
  import CommonInput from "./CommonInput.svelte";
  import "../../variables.css";
  import CommonLabel from "./CommonLabel.svelte";
  import FormUnit from "./FormUnit.svelte";

  export let type: string;
  export let value: string;
  export let name: string;

  let counter: number = 0;
</script>

<FormUnit className={"numberinput"} borderColor={"hsl(158, 64%, 52%)"}>
  <CommonLabel {type} {name} />
  <CommonInput {type} {name} {value} />
</FormUnit>

<style>
  :global(.numberinput) {
    position: relative;
    border-radius: 0.75rem;
    padding: 1rem 0.75rem;
  }

  :global(.numberinput .label) {
    color: var(--global-green);
  }
</style>
