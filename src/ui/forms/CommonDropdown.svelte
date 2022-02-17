<script type="ts">
  export let options: Array<string>;
  export let selected: string;

  console.log("OPTIONS DATA", options);
</script>

<select bind:value={selected}>
  {#each options as opt}
    <option value={opt} selected>
      {opt}
    </option>
  {/each}
</select>
