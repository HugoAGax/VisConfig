<script lang="ts">
  export let name: string;
  import MultiRenderer from "./ui/MultiRenderer.svelte";
  import FormContainer from "./ui/structure/FormContainer.svelte";

  const sampleData = {
    name: "John",
    lastName: "Doe",
    age: 68,
    gender: "male",
    alive: true,
    family: {
      firstSon: "Mack Doe",
      secondSon: "Daniel Doe",
      firstDaughter: {
        name: "John",
        lastName: "Doe",
        age: 68,
        gender: "male",
        alive: true,
        family: {
          firstSon: "Mack Doe",
          secondSon: "Daniel Doe",
          firstDaughter: "Amber Doe",
        },
        currentJob: null,
        interests: ["Coffee", "Bakery", "Cooking"],
      },
    },
    currentJob: null,
    interests: ["Coffee", "Bakery", "Cooking"],
  };
</script>

<main>
    <FormContainer>
      <MultiRenderer dataToClassify={sampleData} objectName={''}/>
    </FormContainer>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
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
</style>
