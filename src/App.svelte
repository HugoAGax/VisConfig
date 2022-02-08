<script lang="ts">
  export let name : string;
  import MultiRenderer from "./ui/MultiRenderer.svelte";

  const sampleData = {
    name: "John",
    lastName: "Doe",
    age: 68,
    gender: "male",
    alive: true,
    family: {
      firstSon: "Mack Doe",
      secondSon: "Daniel Doe",
      firstDaighter: "Amber Doe",
    },
    currentJob: null,
    interests: ["Coffee", "Bakery", "Cooking"],
  };
</script>

<main>
  <div class="container">
    <MultiRenderer dataToClassify={sampleData}></MultiRenderer>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .container {
	  max-width: 800px;
	  width: 100%;
  }
</style>
