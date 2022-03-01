<script lang="ts">
  export let name: string;

  import { dataToRender } from "./ui/store";
  import { addToast } from "./ui/store-toast";
  import MultiRenderer from "./ui/MultiRenderer.svelte";
  import FileDrop from "./ui/structure/FileDrop.svelte";
  import FormContainer from "./ui/structure/FormContainer.svelte";
  import HeroBanner from "./ui/structure/HeroBanner.svelte";
  import HeroCta from "./ui/structure/HeroCTA.svelte";
  import ScrollToTop from "./ui/structure/ScrollToTop.svelte";
  import FileSummary from "./ui/forms/FileSummary.svelte";
  import Footer from "./ui/structure/Footer.svelte";
  import Notification from "./ui/structure/Notification.svelte";
  import SimpleModal from "./ui/structure/SimpleModal.svelte";
  import FileSave from "./filesave";

  $dataToRender = null;

  let fileName: string;
  let fileSize: string;

  let unique = {};
  let modal;

  const restart = () => {
    unique = {};
  };

  const handleUpload = (e: object) => {
    const transfer = e["detail"];
    if (Object.keys(transfer.data).length > 0) {
      restart();
      fileSuccess(transfer.name, transfer.data);
    } else {
      fileFail(transfer.name);
    }
  };

  const fileSuccess = (name, data) => {
    $dataToRender = data;
    fileName = name;
    fileSize = calculateFileSize(data);

    window["_jsonStorage"] = data;
    window["filename"] = fileName;
    addToast({
      message: fileName,
      type: "success",
      dismissible: true,
      timeout: 5000,
    });
  };

  const calculateFileSize = (data) => {
    return (
      (new TextEncoder().encode(JSON.stringify(data)).length / 1024)
        .toFixed(4)
        .toString() + " kB"
    );
  };

  const fileFail = (name) => {
    addToast({
      message: name,
      type: "error",
      dismissible: true,
      timeout: 5000,
    });
  };

  const handleClear = () => {
    $dataToRender = null;
    window["_jsonStorage"] = $dataToRender;
  };

  const handleSave = () => {
    modal.setFileName(fileName);
    modal.setFileSize(fileSize);
    modal.activate();
  };

  const handleUpdate = (e) => {
    console.log(
      "%cJSON Data to Output --->",
      "background: yellow; color: blue; padding: 4px",
      e.detail.value
    );
    window["_jsonStorage"] = e.detail.value;
    fileSize = calculateFileSize(e.detail.value);
  };

  const saveFile = (e) => {
    let setFileSave = new FileSave();
    setFileSave.download(
      JSON.stringify(window["_jsonStorage"]),
      e.detail.filename,
      "text/plain"
    );
  };
</script>

<SimpleModal bind:this={modal} on:saveFile={saveFile} />
<main>
  <Notification />
  <HeroBanner>
    <HeroCta />
    <FileDrop on:upload={handleUpload} />
  </HeroBanner>

  <ScrollToTop />
  {#if $dataToRender}
    {#key unique}
      <FormContainer>
        <FileSummary
          name={fileName}
          size={fileSize}
          on:clear={handleClear}
          on:save={handleSave}
        />
        <MultiRenderer
          dataToClassify={$dataToRender}
          objectName={""}
          on:update={handleUpdate}
        />
        <FileSummary
          name={fileName}
          size={fileSize}
          on:clear={handleClear}
          on:save={handleSave}
        />
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
