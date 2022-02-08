<script lang="ts">
    import CommonInput from "./CommonInput.svelte";
    import CommonLabel from "./CommonLabel.svelte";
    import "../../variables.css";
  
    export let type: string;
    export let value: string;
    export let name: string;
    export let cpt: string;
  </script>
  
  <main>
    <div class="checkbox" component-type={cpt}>
      <CommonLabel {type} {name} />
      <CommonInput {type} {name} {value} />
    </div>
  </main>
  
  <style>
    .checkbox {
      position: relative;
      border: 1px solid var(--global-orange);
      border-radius: 4px;
      padding: 1rem 0.75rem;
    }
  </style>
  