<script lang="ts">
  import CommonInput from "./common/CommonInput.svelte";
  import FormUnit from "./FormUnit.svelte";
  import CommonLabel from "./common/CommonLabel.svelte";
  import { createEventDispatcher } from "svelte";
  import "../../variables.css";

  export let type: string;
  export let value: string;
  export let name: string;

  const dispatch = createEventDispatcher();
  const updateHandler = (data) => {
    dispatch("update", data.detail);
  };
</script>

<FormUnit className={"textinput"} borderColor={"hsl(217, 91%, 60%)"}>
  <CommonLabel {type} {name} />
  <CommonInput {type} {name} {value} on:update={updateHandler}/>
</FormUnit>

<style>
  :global(.textinput) {
    position: relative;
    border-radius: 0.75rem;
    font-family: "IBM Plex Sans Thai Looped", sans-serif;
  }

  :global(.textinput .label) {
    color: var(--global-blue);
  }
</style>
