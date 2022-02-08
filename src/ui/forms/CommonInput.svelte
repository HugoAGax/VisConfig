<script lang="ts">
  import "../../variables.css";

  export let type: string;
  export let value: string;
  export let name: string;
</script>

<div class="input-container">
    <input class="input" id={name} {type} {value} />
</div>

<style>
  .input {
    width: 100%;
    margin: 0;
    font-size: 14px;
    border-radius: 4px;
  }
</style>
