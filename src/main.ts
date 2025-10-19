import "./style.css";
import cytoscape from "cytoscape";
import elk from "cytoscape-elk";

cytoscape.use(elk);

cytoscape({
  container: document.getElementById("app"),

  elements: [
    {
      data: { id: "in1" },
      style: { "border-width": 0 },
    },
    {
      data: { id: "out1" },
      style: { "border-width": 0 },
    },
    {
      data: { id: "out2" },
      style: { "border-width": 0 },
    },
    {
      // node a
      data: { id: "A" },
    },
    {
      // node b
      data: { id: "B" },
    },
    {
      // node c
      data: { id: "C" },
    },
    {
      // node d
      data: { id: "D" },
    },
    {
      data: { id: "CDelay" },
      style: { "border-width": 0 },
    },

    {
      data: { id: "Sin1", source: "in1", target: "A" },
    },
    {
      data: { id: "Sout1", source: "B", target: "out1" },
    },
    {
      data: { id: "Sout2", source: "D", target: "out2" },
    },
    {
      data: { id: "SAB", source: "A", target: "B" },
    },
    {
      data: { id: "SCC1", source: "C", target: "CDelay" },
    },
    {
      data: { id: "SCC2", source: "CDelay", target: "C" },
    },
    {
      data: { id: "SAC", source: "A", target: "C" },
    },
    {
      data: { id: "SBD", source: "B", target: "D" },
    },
    {
      data: { id: "SCD", source: "C", target: "D" },
    },
  ],

  style: [
    // the stylesheet for the graph
    {
      selector: "node",
      style: {
        "background-color": "#ffffff",
        "border-color": "#000",
        "border-width": "2px",
        content: "data(id)",
        shape: "ellipse",
        "text-valign": "center",
        "text-halign": "center",
      },
    },

    {
      selector: "node#CDelay",
      style: {
        "background-color": "#000",
        width: 10,
        height: 10,
        content: "",
        shape: "ellipse",
        "text-valign": "center",
        "text-halign": "center",
      },
    },

    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#000",
        "target-arrow-color": "#000",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],

  layout: {
    name: "elk",
    // rows: 1,
  },
});

cytoscape.warnings(true);
