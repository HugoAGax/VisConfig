<script lang="ts">
  import "../../variables.css";
  export let name: string;
  export let size: string;
</script>

<div class="file-summary">
  <h3>{name}</h3>
  <p>{size}</p>
</div>

<style>
  .file-summary {
    background-color: hsla(231, 84%, 83%, 0.2);
    padding: 1rem 1.5rem;
    display: flex;
    border-radius: 0.75rem;
    justify-content: space-between;
  }

  .file-summary h3 {
    font-size: 16px;
    font-weight: 500;
    color: hsl(231, 61%, 63%);
  }

  .file-summary p {
    padding-left: 1rem;
    border-left: 1px solid hsl(231, 61%, 63%);
    font-size: 14px;
    line-height: 2;
    color: hsl(231, 61%, 63%);
  }
</style>
