<script lang="ts">
  import CommonInput from "./CommonInput.svelte";
  import FormUnit from "./FormUnit.svelte";
  import CommonLabel from "./CommonLabel.svelte";

  import "../../variables.css";

  export let type: string;
  export let value: string;
  export let name: string;
  export let cpt: string;

  let counter: number = 0;
</script>

<FormUnit className={"textinput"} borderColor={"hsl(217, 91%, 60%)"}>
  <CommonLabel {type} {name} />
  <CommonInput {type} {name} {value} />
</FormUnit>

<style>
  :global(.textinput) {
    position: relative;
    border-radius: 4px;
    font-family: "IBM Plex Sans Thai Looped", sans-serif;
  }

  :global(.textinput .label) {
    color: var(--global-blue);
  }
</style>
