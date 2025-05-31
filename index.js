import { createElement, useEffect, useReducer } from "react";
import { createRoot } from "react-dom/client";

let bar = () => console.log("good");

function Example() {
  console.log("rendering");
  const [updateTrigger, triggerUpdate] = useReducer(() => ({}), {});

  useEffect(() => {
    const timeout = setTimeout(triggerUpdate);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(bar, [updateTrigger]);

  return null;
}

createRoot(
  /** @type {HTMLDivElement} */ (document.getElementById("root"))
).render(createElement(Example));

setTimeout(() =>
  setTimeout(() => {
    console.log("changing bar");
    bar = () => console.log("evil");
  })
);
