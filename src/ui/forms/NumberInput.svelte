<script lang="ts">
  import CommonInput from "./CommonInput.svelte";
  import "../../variables.css";
  import CommonLabel from "./CommonLabel.svelte";
  import FormUnit from "./FormUnit.svelte";
  import { createEventDispatcher } from "svelte";

  export let type: string;
  export let value: string;
  export let name: string;

  const dispatch = createEventDispatcher();
  const updateHandler = (data) => {
    console.log('NumberInput::update', data.detail);
    dispatch("update", data.detail);
  };
</script>

<FormUnit className={"numberinput"} borderColor={"hsl(158, 64%, 52%)"}>
  <CommonLabel {type} {name} />
  <CommonInput {type} {name} {value} on:update={updateHandler}/>
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
