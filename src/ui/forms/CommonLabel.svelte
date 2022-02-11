<script lang="ts">
  import "../../variables.css";

  export let type: string;
  export let name: string;
</script>

<div class="caption">
  <label class="label" for={name}>
    {name}
    <span>({type})</span>
</label>
</div>

<style>
  .caption {
    position: absolute;
    left: 10px;
    background-color: hsl(210, 40%, 98%);
    padding: 0px 8px;
    top: -8px;
  }

  .label {
    font-size: 12px;
    text-transform: capitalize;
  }

  .label span {
      color: var(--global-mid-grey);
  }
</style>
