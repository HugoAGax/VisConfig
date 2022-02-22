<script lang="ts">
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUBMIT CATCHED");
    console.log(e);
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    console.log(data);
  };
</script>

<form class="formcontainer" on:submit={handleSubmit}>
  <slot />
</form>

<style>
  .formcontainer {
    background-color: hsl(210, 40%, 98%);
    max-width: calc(800px - 4rem);
    width: 100%;
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 3rem hsl(231deg 84% 83% / 30%);
    border: 1px solid hsl(231deg 84% 83% / 10%);
  }

  .formcontainer > :global(.multirender) {
    border: 0;
    padding-left: 0;
  }
</style>
