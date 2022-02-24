<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  const dispatch = createEventDispatcher();

  export let type: string;
  export let dismissible: boolean;
  export let message: string;
</script>

<div class="toast {type !== '' ? type : ''}" role="alert" transition:fade>
  {#if type === "success"}
    <img class="checkmark" src="assets/checkmark.svg" alt="checkmark" />
    <span>Successful upload of <strong>{message}</strong></span>
  {:else if type === "error"}
    <img class="failmark" src="assets/error.svg" alt="failmark" />
    <span>Error caused by file <strong>{message}</strong></span>
  {:else}
    <span>File to save <strong>{message}</strong></span>
  {/if}

  {#if dismissible}
    <button class="close" on:click={() => dispatch("dismiss")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        viewBox="0 0 320 512"
      >
        <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </button>
  {/if}
</div>

<style>
  .toast {
    padding: 0.75rem 0.5rem 0.75rem 1rem;
    display: flex;
    align-items: center;
    margin: 0 auto 1rem auto;
    max-width: 35rem;
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 3rem hsl(231deg 84% 83% / 20%);
    line-height: 1;
  }
  .toast svg {
    height: 16px;
    width: auto;
  }
  .toast span {
    padding-top: 3px;
  }
  .error {
    background-color: #fecaca;
    color: #dc2626;
  }
  .error svg {
    fill: #dc2626;
  }
  .error .failmark {
    height: 16px;
    width: auto;
    margin-right: 0.5rem;
  }
  .success {
    background-color: #a7f3d0;
    color: #059669;
  }
  .success svg {
    fill: #059669;
  }
  .success .checkmark {
    height: 16px;
    width: auto;
    margin-right: 0.5rem;
  }
  .info {
    background: SkyBlue;
  }
  .text {
    margin-left: 1rem;
  }
  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    cursor: pointer;
    padding: 0.25rem;
    height: 24px;
  }

  button:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
</style>
