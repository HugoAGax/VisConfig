<script lang="ts">
</script>

  <div class="formcontainer">
    <slot></slot>
  </div>

<style>
  .formcontainer {
    background-color: hsl(210, 40%, 98%);
    max-width: calc(800px - 4rem);
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
  }

  .formcontainer > :global(.multirender) {
    border: 0;
    padding-left: 0;
  }
</style>
