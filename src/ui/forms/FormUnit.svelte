<script lang="ts">
  export let className: string;
  export let borderColor: string;
</script>

<div class={`formunit ${className || ""}`} style="--border-color:{borderColor}">
  <slot />
</div>

<style>
  .formunit {
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 0.75rem;
    border: 1px solid var(--border-color);
  }
</style>
