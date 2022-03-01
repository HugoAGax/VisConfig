<script lang="ts">
  import "../../variables.css";
  import { createEventDispatcher } from "svelte";

  export let dataToSave : object;
  export let  fileName: string;


</script>

<a class="download-anchor" js-download />

<style>
  .download-anchor {
    display: none;
  }
</style>
