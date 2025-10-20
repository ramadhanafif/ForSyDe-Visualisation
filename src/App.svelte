<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<main
  class="flex min-h-screen flex-col items-center bg-gray-100 justify-between"
>
  <header class="w-full px-8 py-8">
    <h1 class="text-3xl font-bold">
      <span class="text-indigo-800 transition-all">ForSyDe</span> SDF Graph Demo
    </h1>
    <h2 class="text-slate-400">
      using <a
        href="https://js.cytoscape.org/"
        class="hover:underline hover:text-blue-300 transition-all decoration-blue-400"
        >Cytoscape.js</a
      > library
    </h2>
  </header>

  <div id="cy-canvas"></div>
</main>
