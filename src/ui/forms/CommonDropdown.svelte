<script lang="ts">
  export let options: Array<string>;
  export let selected: string;
</script>

<select class="dropdown" bind:value={selected}>
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
