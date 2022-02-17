<script lang="ts">
  export let className: string;
  export let borderColor: string;
</script>

<div class="{`formunit ${className || ''}`}" style="--border-color:{borderColor}">
  <slot></slot>
</div>

<style>
  .formunit {
    padding: 0.75rem;
    margin: 0.75rem 0;
    border-radius: 4px;
    border: 1px solid var(--border-color);
  }
</style>
