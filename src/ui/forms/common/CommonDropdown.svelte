<script lang="ts">
  export let options: Array<string>;
  export let selected: string;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const handleChange = (e) => {
    dispatch("update", {
      value: e.target.value === 'true' ? true : false,
      name: ''
    });
    selected = e.target.value;
  };
</script>

<select class="dropdown" bind:value={selected} on:change={handleChange}>
  {#each options as opt}
    <option value={opt} selected>
      {opt}
    </option>
  {/each}
</select>

<style>
  .dropdown {
    width: 100%;
    margin: 0;
    font-size: 14px;
    border-radius: 0.5rem;
    border-color: hsla(231, 84%, 83%, 0.5);
    box-shadow: inset 0 0 10px hsla(231, 84%, 83%, 0.1);
  }
</style>
