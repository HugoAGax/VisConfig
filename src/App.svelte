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
  import Footer from "./ui/structure/Footer.svelte";

  $dataToRender = null;

  let fileName: string;
  let fileSize: string;

  let unique = {};

  const restart = () => {
    unique = {};
  };

  const handleUpload = (e: object) => {
    const size =
      (new TextEncoder().encode(JSON.stringify(e["detail"].data)).length / 1024)
        .toFixed(4)
        .toString() + " kB";
    console.log(size);
    $dataToRender = e["detail"].data;
    window["jsonData"] = $dataToRender;
    fileName = e["detail"].name;
    fileSize = size;
    restart();
  };

  const handleClear = () => {
    $dataToRender = null;
    window["jsonData"] = $dataToRender;
  };
</script>

<main>
  <HeroBanner>
    <HeroCta />
    <FileDrop on:upload={handleUpload} />
  </HeroBanner>

  <ScrollToTop />
  {#if $dataToRender}
    {#key unique}
      <FormContainer>
        <FileSummary name={fileName} size={fileSize} on:clear={handleClear} />
        <MultiRenderer dataToClassify={$dataToRender} objectName={""} />
        <FileSummary name={fileName} size={fileSize} on:clear={handleClear} />
      </FormContainer>
    {/key}
  {/if}
  <Footer />
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
