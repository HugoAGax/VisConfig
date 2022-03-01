<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let type: string;
  export let text: string;
  export let classNames: string;

  const dispatch = createEventDispatcher();
  const submitHandler = () => dispatch("activate");
</script>

<button class="button {classNames !== '' ? classNames : ''}" on:click={submitHandler} {type}>{text}</button>

<style>
  .button {
    white-space: nowrap;
    font-size: 14px;
    border-radius: 0.5rem;
    border: 0;
    margin: 0;
    padding: 0.25rem 1rem;
    cursor: pointer;
    transition: 0.2s;
    width: 100%;
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
</style>
