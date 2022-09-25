<script lang="ts" defer>
  import '../app.css'
  import {style_values} from '../ts/styles'
</script>

<main style={style_values} class="bg-[image:var(--bg-gradient)] w-auto h-auto p-[2vmax] selection_bg-white selection_text-black">
  <div class="z-10 [filter:drop-shadow(var(--shadow))] bg-[image:var(--bg-gradient)] flex justify-around sticky top-0 p-[0.8ch]">
    <a href="/" class="text-[clamp(1rem,_1.5rem,_3vmax)] p-[0.8ch]">
      Home
    </a>

    <a href="/projects" class="text-[clamp(1rem,_1.5rem,_3vmax)] p-[0.8ch]">
      Projects
    </a>
  </div>
  <slot></slot>
</main>