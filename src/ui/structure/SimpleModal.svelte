<script lang="ts">
  import CommonButton from "../forms/common/CommonButton.svelte";
  import CommonInput from "../forms/common/CommonInput.svelte";
  import { modalIsOpen } from "./../../ui/store";
  import { createEventDispatcher } from "svelte";

  export const isOpen = () => {
    return modalIsOpen;
  };

  export const activate = () => {
    $modalIsOpen = true;
  };

  export const deactivate = () => {
    $modalIsOpen = false;
  };

  export const setFileName = (str) => {
    filename = str;
  };

  export const setFileSize = (str) => {
    fileSize = str;
  };

  const updateFileName = (e) => {
    filename = e.detail.value;
  };

  const dispatch = createEventDispatcher();
  const downloadFile = (e) => {
    dispatch("saveFile", {
      filename: filename
    });
  };
  let filename: string;
  let fileSize: string;
</script>

<div class="modal-wrapper {$modalIsOpen === true ? 'active' : ''}">
  <div class="backdrop" on:click={deactivate} />
  <div class="modal-body">
    <button type="button" class="close-button" on:click={deactivate}>✕</button>
    <div class="saveform-copy">
      <h3>Save your new JSON as...</h3>
      <p>Under which file name will your JSON be output to?</p>
      <p>The saved filw will have a size of <strong>{fileSize}</strong></p>
    </div>
    <form class="saveform">
      <CommonInput name="save" type={"text"} value={filename} on:update={updateFileName}/>
      <CommonButton type={"button"} text={"Save"} classNames="save" on:activate={downloadFile}/>
      <CommonButton type={"button"} text={"Cancel"} classNames="" on:activate={deactivate}/>
    </form>
  </div>
</div>

<style>
  .modal-wrapper {
    height: 100%;
    width: 100%;
    display: none;
    position: fixed;
    z-index: 1;
  }
  .modal-wrapper.active {
    display: block;
  }
  .backdrop {
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
  }
  .close-button {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background: transparent;
    border: 0;
    font-weight: 700;
    font-size: 16px;
    height: 25px;
    margin-bottom: 0;
    line-height: 16px;
    transition: 0.2s;
    cursor: pointer;
  }
  .close-button:hover {
    background-color: #ccc;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 3rem hsl(231deg 84% 83% / 20%);
    min-height: 240px;
    justify-content: space-between;
  }

  .saveform :global(.button) {
    margin-top: 0.75rem;
  }
</style>
