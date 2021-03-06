<script lang="ts">
  import Classifier from "../scripts/classifier";
  import CheckBox from "./forms/CheckBox.svelte";
  import TextInput from "./forms/TextInput.svelte";
  import NumberInput from "./forms/NumberInput.svelte";
  import { createEventDispatcher } from "svelte";

  export let dataToClassify: object;
  export let objectName: string;
  
  let instanceClassifier = new Classifier({
    data: dataToClassify,
    categories: {
      string: "TextInput",
      number: "NumberInput",
      boolean: "CheckBox",
      object: "MultiRenderer",
    },
  });

  const result = objectName.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  const dispatch = createEventDispatcher();
  let toRender = instanceClassifier.classifyAll();

  const handleUpdate = (e) => {
    dataToClassify[e.detail.name] = e.detail.value;
    dispatch("update", {
      value: dataToClassify,
      name: objectName
    });
  }
</script>

<div class="multirender">
  {#if finalResult}
    <span class="category">{finalResult}</span>
  {/if}
  {#each toRender as item}
    {#if item.cpt === "TextInput"}
      <TextInput type={item.type} name={item.name} value={item.value} on:update={handleUpdate}/>
    {/if}
    {#if item.cpt === "NumberInput"}
      <NumberInput type={item.type} name={item.name} value={item.value} on:update={handleUpdate}/>
    {/if}
    {#if item.cpt === "CheckBox"}
      <CheckBox type={item.type} name={item.name} value={item.value} on:update={handleUpdate}/>
    {/if}
    {#if item.cpt === "MultiRenderer"}
      <svelte:self
        dataToClassify={item.value}
        objectName={item.name}
        on:update={handleUpdate}
      />
    {/if}
  {/each}
</div>

<style>
  .multirender {
    position: relative;
    border-left: 1px solid hsl(231, 84%, 83%);
    font-family: "IBM Plex Sans Thai Looped", sans-serif;
    padding: 0.5rem 0 0.5rem 1rem;
    margin: 0;
  }

  .multirender .category {
    color: hsl(231, 100%, 74%);
    display: flex;
    font-size: 12px;
    font-weight: 700;
  }

  :global(.numberinput .label) {
    color: #36d399;
  }
</style>
