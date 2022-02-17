<script lang="ts">
  import "../../variables.css";
  export let value : string;
</script>

    <textarea bind:value={value}></textarea>

<style>
  textarea {
    width: 100%;
    font-size: 14px;
  }
</style>
