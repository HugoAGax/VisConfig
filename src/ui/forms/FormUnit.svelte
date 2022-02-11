<script lang="ts">
  export let className: string;
  export let borderColor: string;
  console.log('CLASSNAME', className);
</script>

<div class="{`formunit ${className || ''}`}" style="--border-color:{borderColor}">
  <slot></slot>
</div>

<style>
  .formunit {
    padding: 0.75rem 0 0.75rem 0.75rem;
    margin: 0.75rem 0;
    border-radius: 4px 0 0 4px;
    border-top: 1px solid;
    border-left: 1px solid;
    border-bottom: 1px solid;
    border-color: var(--border-color);
  }
</style>
