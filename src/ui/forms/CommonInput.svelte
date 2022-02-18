<script lang="ts">
  import "../../variables.css";

  export let type: string;
  export let value: string;
  export let name: string;

  const handleKeydown = (e) => {
    console.log("EVENT", e);
  };
</script>

<div class="input-container">
  <input class="input" id={name} {type} {value} on:keydown={handleKeydown} />
</div>

<style>
  .input {
    width: 100%;
    margin: 0;
    font-size: 14px;
    border-radius: 0.5rem;
    border-color: hsla(231, 84%, 83%, 0.5);
    padding: 0.4rem 0.75rem;
    box-shadow: inset 0 0 10px hsla(231, 84%, 83%, 0.1);
  }
</style>
