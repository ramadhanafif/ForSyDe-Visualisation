<script lang="ts">
  import cytoscape from "cytoscape";
  import { onMount } from "svelte";

  let cyContainer: HTMLElement = document.getElementById("cy-canvas")!;

  onMount(() => {
    cytoscape({
      container: cyContainer,
      elements: [
        // list of graph elements to start with
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: { id: "c", source: "a", target: "b" } },
        { data: { source: "a", target: "b" } },
      ],
      style: [
        // basic stylesheet for the nodes and edges
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)",
          },
        },
        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],
      layout: {
        name: "grid",
        rows: 1,
      },
    });
  });

  // diagram.create()
</script>

<main
  class="flex min-h-screen flex-col items-center bg-gray-100 justify-between"
>
  <header
    class="w-full px-8 pt-8 pb-4 border-b-2 flex items-center justify-between"
  >
    <div class="flex gap-4">
      <a href="https://forsyde.github.io/">
        <img
          class="h-15"
          src="https://forsyde.github.io/assets/images/forsyde-logo.svg"
          alt="logo"
        />
      </a>
      <div>
        <h1 class="text-3xl font-bold">
          <a
            href="https://forsyde.github.io/"
            class="text-sky-800 hover:underline decoration-sky-800 transition-all"
            >ForSyDe</a
          > SDF Graph Demo
        </h1>
        <h2 class="text-slate-400">
          using <a
            href="https://js.cytoscape.org/"
            class="underline hover:text-blue-400 transition-all hover:decoration-blue-400"
            >Cytoscape.js</a
          > library
        </h2>
      </div>
    </div>
    <a
      class="hover:underline hover:text-blue-500 decoration-blue-500"
      href="https://github.com/ramadhanafif/ForSyDe-Visualisation">GitHub</a
    >
  </header>
  <div class="w-full px-8 my-4 flex gap-4">
    <button
      class="rounded-lg bg-blue-700 text-white px-4 py-2 hover:scale-105 hover:bg-blue-600 transition-all"
      >Add Node</button
    >
  </div>

  <div
    bind:this={cyContainer}
    id="cy-canvas"
    class="w-full flex-1 border-1 border-red-500"
  ></div>
</main>
