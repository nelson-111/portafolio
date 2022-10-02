<title>Nelson Ricaurte</title>

<script lang="ts" defer>
  import {contacts} from '$lib/ts/contacts'
  import {stack, interested_on} from '$lib/ts/my-stack'
</script>

<h1 class="text-[5vmax] mb-[1vmax]" title="greeting">Hello, I'm Nelson</h1>

<p class="text-size" title="Nelson resume">
  I'm a student, learning about web development, the technologies that I like and the new ones that can be serious alternatives in the future
</p>

<h1 class="second-h1">Social media</h1>

<section class="flex justify-evenly" title="Nelson social media">
  {#each contacts as contact}
    <a href={contact.href} title={contact.alt}
    class="icon">
      {@html contact.icon}
    </a>
  {/each}
</section>

<h1 class="second-h1">My stack</h1>

<section class="custom-grid" title="Nelson tech stack">
  {#each stack as item}
    <a href={item.href} title={item.alt} class="text-size p-[0.5vmax]">
      {item.alt}
    </a>
  {/each}
</section>

<h1 class="second-h1">Interested on</h1>

<section class="custom-grid" title="Tools that Nelson is interested on">
  {#each interested_on as item}
    <a href={item.href} title={item.alt} class="text-size p-[0.5vmax]">
      {item.alt}
    </a>
  {/each}
</section>

<a href="/projects">
  <h1 title="Nelson projects" class="second-h1">Projects</h1>
  <p class="text-size">
    Click here to see my projects, these can be businesses, experiments or collaborations
  </p>
</a>