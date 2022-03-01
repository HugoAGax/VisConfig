<script lang="ts">
  import CommonLabel from "./common/CommonLabel.svelte";
  import FormUnit from "./FormUnit.svelte";
  import "../../variables.css";
  import CommonDropdown from "./common/CommonDropdown.svelte";
  import { createEventDispatcher } from "svelte";

  export let type: string;
  export let value: string;
  export let name: string;

  let dValue = value ? "true" : "false";
  let dropdownData = ["true", "false"];

  const dispatch = createEventDispatcher();
  const updateHandler = (data) => {
    data.detail.name = name;
    dispatch("update", data.detail);
  };
</script>

<FormUnit className={"checkbox"} borderColor={"hsl(25, 95%, 53%)"}>
  <CommonLabel {type} {name} />
  <CommonDropdown options={dropdownData} selected={dValue} on:update={updateHandler}/>
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
