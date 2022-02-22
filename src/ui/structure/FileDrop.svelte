<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  let textarea;

  const _dispatchFileData = (name, data) => {
    dispatch("upload", {
      name: name,
      data: data,
    });
  };
  let files: object;

  const onFileSelected = (e) => {
    let doc = e.target.files[0];

    const fileread = new FileReader();
    fileread.onload = (evt: object) => {
      console.log(evt);
      const content = evt["target"].result;
      _dispatchFileData(doc["name"], JSON.parse(content));
    };

    fileread.readAsText(doc);
  };

  const buttonClickHandler = () => {
    _dispatchFileData("", JSON.parse(textarea.value));
  };
</script>

<div class="input-container">
  <div class="upload-as-text">
    <textarea bind:this={textarea} placeholder="Input your JSON here..." />
    <button class="textarea-submit" on:click={buttonClickHandler}>
      Render text
    </button>
  </div>
  <div>
    <div id="dropContainer" class="drop-container">
      <img
        class="upload-icon"
        src="assets/cloud-arrow-up-solid.svg"
        alt="upload-icon"
      />
      <p>Drag and drop JSON files here or</p>
      <label for="json-input" class="custom-file-upload">
        upload from your computer
      </label>
      <input
        id="json-input"
        type="file"
        accept=".json, .txt"
        on:change={(e) => onFileSelected(e)}
      />
    </div>
  </div>
</div>

<style>
  .input-container {
    background-color: #f3e8ff;
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    height: 20vh;
  }

  .input-container > div {
    width: 100%;
    margin: 0 12px;
  }

  .input-container > div:first-child {
    margin-left: 0;
  }

  .input-container > div:last-child {
    margin-right: 0;
  }

  .input-container input {
    display: none;
  }

  .input-container textarea {
    height: 100%;
    font-size: 12px;
    background-color: #faf5ff;
    border-radius: 0.5rem;
    border: 1px solid #c4b5fd;
  }

  .upload-as-text {
    display: flex;
    flex-direction: column;
  }

  .textarea-submit {
    border-radius: 0.5rem;
    background-color: #a855f7;
    padding: 0.25rem 0.75rem;
    transition: 0.2s;
    color: white;
    border: 0;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
  }

  .textarea-submit:hover {
    color: #a855f7;
    background-color: #ffedd5;
  }

  .custom-file-upload {
    color: #4f46e5;
    transition: 0.2s;
    cursor: pointer;
  }

  .custom-file-upload:hover {
    text-decoration: underline;
  }

  .drop-container {
    height: calc(100% - 2rem);
    border: 1px dashed #c084fc;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    color: #c084fc;
    line-height: 1.3;
  }

  .upload-icon {
    height: 64px;
    width: auto;
    margin-bottom: 1rem;
  }
</style>
