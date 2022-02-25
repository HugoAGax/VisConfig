<script lang="ts">
  import "../../variables.css";
  import { createEventDispatcher } from "svelte";

  export let name: string;
  export let size: string;

  const dispatch = createEventDispatcher();
  const _dispatchEvent = (type) => {
    dispatch(type);
  };
  const clearButtonHandler = () => {
    _dispatchEvent("clear");
  };
  const saveButtonHandler = () => {
    _dispatchEvent("save");
  };
</script>

<div class="file-summary">
  <h3>{name}</h3>
  <p>{size}</p>
  <button class="button save" type="submit" on:click={saveButtonHandler}>Save JSON</button>
  <button class="button clear" on:click={clearButtonHandler}>Clear</button>
</div>

<style>
  .file-summary {
    background-color: hsla(231, 84%, 83%, 0.2);
    padding: 1rem 1.5rem;
    display: flex;
    border-radius: 0.75rem;
    justify-content: space-between;
    align-items: center;
  }

  .file-summary h3 {
    font-size: 16px;
    font-weight: 500;
    color: hsl(231, 61%, 63%);
    white-space: nowrap;
    padding-right: 1rem;
  }

  .file-summary p {
    padding: 0 1rem;
    border-left: 1px solid #6778da;
    font-size: 14px;
    line-height: 2;
    color: #6778da;
    width: 100%;
    text-align: left;
  }

  .button {
    white-space: nowrap;
    font-size: 14px;
    border-radius: 0.5rem;
    border: 0;
    margin: 0;
    padding: 0.25rem 1rem;
    cursor: pointer;
    transition: 0.2s;
  }

  .button.save:hover {
    background-color: #22c55e;
    color: #fff;
  }

  .button.clear:hover {
    background-color: #fb923c;
    outline: 1px solid #fb923c;
    color: #fff;
  }

  .button.save {
    background-color: #6778da;
    color: #fff;
  }

  .button.clear {
    margin-left: 0.75rem;
    background-color: transparent;
    outline: 1px solid #6778da;
    color: hsl(231, 61%, 63%);
  }
</style>
