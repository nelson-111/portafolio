<title>Nelson's projects</title>

<script context="module">
  export const variables = {
    base_path: import.meta.env.VITE_GITHUB_API_TOKEN
  }
</script>

<script lang="ts" defer>
  let projects = fetch('https://api.github.com/users/nelson-111/repos',
  {
    method: 'GET',
    headers: {
      'Authorization': `token ${variables.base_path}`,
    }
  })
  .then(result => result.json())
</script>

<h1 class="text-[5vmax] m-[1vmax]">Projects</h1>

{#await projects}
  <p class="text-[2.4vmax]">Loading projects</p>
{:then result}
  <section class="grid gap-[2vmax]">
    {#each result as project}
    <a href={project.homepage} class="text-size p-[0.6ch] bg-[image:var(--bg-gradient)] drop-shadow-[0_0_0.3vmax_var(--color-1)]" title={project.name} loading="lazy">
      <p class="text-[3vmax]">{project.name}</p>

      <hr class="border-[color:var(--color-1)] border-[0.1vmax] drop-shadow-[0_0_0.25vmax_var(--color-1)] m-[1.5vmax]">

      {project.description}
    </a>
    {/each}
  </section>
{/await}
