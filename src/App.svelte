<script lang="ts">
  // External library imports
  import cytoscape from "cytoscape";
  import elk from "cytoscape-elk";
  import { onMount } from "svelte";

  // Type definitions
  type SDFNode = {
    id: string;
    label: string;
    type: "actor" | "delay" | "input" | "output";
    inputCount: number;
    outputCount: number;
  };

  // Configure Cytoscape with ELK layout
  cytoscape.use(elk);

  // Component state
  let cyContainer: HTMLElement = document.getElementById("cy-canvas")!;
  let cy: cytoscape.Core;

  // Style configuration for graph nodes and edges
  const graphStyles: cytoscape.Stylesheet[] = [
    {
      selector: "node[type='actor']",
      style: {
        "background-color": "#f3f4f6",
        label: "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "font-size": 12,
        "border-width": "1",
      },
    },
    {
      selector: "node[type='delay']",
      style: {
        "background-color": "#000",
        "text-valign": "center",
        "text-halign": "center",
        "font-size": 12,
        width: 8,
        height: 8,
      },
    },
    {
      selector: "node[type='input']",
      style: {
        "background-color": "#f3f4f6",
        "text-valign": "center",
        "text-halign": "center",
        label: "data(label)",
        "font-size": 12,
        width: 8,
        height: 8,
        "border-width": 0,
      },
    },
    {
      selector: "node[type='output']",
      style: {
        "background-color": "#f3f4f6",
        "text-valign": "center",
        "text-halign": "center",
        label: "data(label)",
        "font-size": 12,
        width: 8,
        height: 8,
        "border-width": 0,
      },
    },
    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ];

  // Initial graph elements
  const initialElements: cytoscape.ElementDefinition[] = [
    // Nodes
    { data: { id: "a", type: "actor", label: "a" } },
    { data: { id: "b", type: "actor", label: "b" } },
    { data: { id: "x", type: "delay" } },
    { data: { id: "d", type: "actor", label: "d" } },

    // Edges
    { data: { id: "c", source: "a", target: "b" } },
    { data: { source: "a", target: "b" } },
    { data: { source: "d", target: "x" } },
    { data: { source: "d", target: "a" } },
    { data: { source: "x", target: "d" } },

    // Input node and edge
    { data: { id: "in1", type: "input", label: "in1" } },
    { data: { source: "in1", target: "a" } },

    // Output node and edge
    { data: { id: "out1", type: "output", label: "out1" } },
    { data: { source: "b", target: "out1" } },
  ];

  // Utility functions
  function generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.random() * charactersLength);
    }
    return result;
  }

  // Graph manipulation functions
  function addNode(): void {
    cy.add({
      group: "nodes",
      data: { id: generateRandomString(3) },
    });
  }

  function relayout(): void {
    cy.layout({
      name: "elk",
      animate: true,
      animationDuration: 100,
      fit: true,
    }).run();
  }

  // Component lifecycle
  onMount(() => {
    cy = cytoscape({
      container: cyContainer,
      elements: initialElements,
      style: graphStyles,
      layout: {
        name: "elk",
      },
    });
  });
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
      onclick={addNode}>Add Node</button
    >
    <button
      class="rounded-lg bg-blue-700 text-white px-4 py-2 hover:scale-105 hover:bg-blue-600 transition-all"
      onclick={relayout}>Layout</button
    >
    <button
      class="rounded-lg bg-red-700 text-white px-4 py-2 hover:scale-105 hover:bg-red-600 transition-all"
      onclick={() => window.location.reload()}>Restart</button
    >
  </div>

  <div
    bind:this={cyContainer}
    id="cy-canvas"
    class="w-full flex-1 border-1 border-red-500"
  ></div>
</main>
