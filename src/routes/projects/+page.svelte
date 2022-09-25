<title>Nelson's projects</title>

<script lang="ts" defer>
  import { projects_preview } from '../../ts/projects_preview'
</script>

<h1 class="text-[5vmax] m-[1vmax]">Projects</h1>

<section class="grid gap-[2vmax]">
  {#each projects_preview as project}
  <a href={project.url} class="text-size p-[0.6ch] bg-[image:var(--bg-gradient)] drop-shadow-[0_0_0.3vmax_var(--color-1)]" title={project.name} loading="lazy">
    {project.name} <br>
    {project.description} <br>

    <hr class="border-[color:var(--color-1)] border-[0.1vmax] drop-shadow-[0_0_0.25vmax_var(--color-1)] m-[1.5vmax]">

    <div class="flex justify-around">
      <span title={project.type} class="icon_tw">
        {@html project.icon}
      </span>
    </div>
  </a>
  {/each}
</section>
