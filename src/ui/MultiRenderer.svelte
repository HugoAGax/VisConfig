<script lang="ts">
  import Classifier from "../scripts/classifier";
  import CheckBox from "./forms/CheckBox.svelte";
  import TextInput from "./forms/TextInput.svelte";
  import NumberInput from "./forms/NumberInput.svelte";

  export let dataToClassify: object;

  console.log(">>> MultiRender", dataToClassify);

  let instanceClassifier = new Classifier({
    data: dataToClassify,
    categories: {
      string: "TextInput",
      number: "NumberInput",
      boolean: "CheckBox",
      object: "MultiRenderer",
    },
  });

  let toRender = instanceClassifier.classifyAll();
</script>

<div class="multirender">
  {#each toRender as item}
    {#if item.cpt === "TextInput"}
      <TextInput {...item} />
    {/if}
    {#if item.cpt === "NumberInput"}
      <NumberInput {...item} />
    {/if}
    {#if item.cpt === "CheckBox"}
      <CheckBox {...item} />
    {/if}
    {#if item.cpt === "MultiRenderer"}
      <svelte:self dataToClassify={item.value} />
    {/if}
  {/each}
</div>

<style>
  .multirender {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: "IBM Plex Sans Thai Looped", sans-serif;
    padding: 1rem 0.75rem;
    margin: 0.5rem 0;
  }
</style>
