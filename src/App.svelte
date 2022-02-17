<script lang="ts">
  export let name: string;

  import { dataToRender } from "./ui/store";

  import MultiRenderer from "./ui/MultiRenderer.svelte";
  import FileDrop from "./ui/structure/FileDrop.svelte";
  import FormContainer from "./ui/structure/FormContainer.svelte";
  import HeroBanner from "./ui/structure/HeroBanner.svelte";
  import HeroCta from "./ui/structure/HeroCTA.svelte";
  import ScrollToTop from "./ui/structure/ScrollToTop.svelte";
  import FileSummary from "./ui/forms/FileSummary.svelte";

  $dataToRender = null;

  let handleUpload = (e) => {
    console.log("CATCHED JSON DATA", e);
    const size = new TextEncoder().encode(JSON.stringify(e.detail.data)).length;
    const kiloBytes = size / 1024;
    const megaBytes = kiloBytes / 1024;
    console.log(size, kiloBytes, megaBytes);
    $dataToRender = e.detail.data;
  };
</script>

<main>
  <HeroBanner>
    <HeroCta />
    <FileDrop on:upload={handleUpload} />
  </HeroBanner>

  <ScrollToTop />

  {#if $dataToRender}
    <FileSummary />
    <FormContainer>
      <MultiRenderer dataToClassify={$dataToRender} objectName={""} />
    </FormContainer>
  {/if}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 2rem);
  }
</style>
