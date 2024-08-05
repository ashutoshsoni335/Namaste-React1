// const heading = React.createElement('h1', {}, ("Hello world from React"))
//         const root = ReactDOM.createRoot(document.getElementById("root"))
//         root.render(heading)

// ---- Nested object in react

const head = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", { }, "Hello from nested object")
    )
  );
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(head);
  
  const parent1 = React.createElement("div", { id: "parent1" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "hi i am h1 tag"),
      React.createElement("h2", {}, "hi i am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "hi i am h1 tag"),
      React.createElement("h2", {}, "hi i am h2 tag"),
    ]),
  ]);
  
  const root1 = ReactDOM.createRoot(document.getElementById("root1"));
  root.render(parent1);