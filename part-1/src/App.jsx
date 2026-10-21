import { useState } from "react";
import Home1A from "./part-1a/home-1a";
import Home1B from "./part-1b/home-1b";
import "./App.css";

const parts = [
  {
    id: "1a",
    title: "Part 1a",
    description: "JavaScript basics, variables, functions and exercises.",
  },
  {
    id: "1b",
    title: "Part 1b",
    description: "React components, props, state and exercises.",
  },
];

const App = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  if (selectedPart === "1a") {
    return (
      <div className="workspace">
        <button onClick={() => setSelectedPart(null)}>
          ← Back to dashboard
        </button>
        <Home1A />
      </div>
    );
  }

  if (selectedPart === "1b") {
    return (
      <div className="workspace">
        <button onClick={() => setSelectedPart(null)}>
          ← Back to dashboard
        </button>
        <Home1B />
      </div>
    );
  }

  // const Footer = () => {
  //   return (
  //     <div>
  //       greeting app created by{" "}
  //       <a href="https://github.com/mluukkai">mluukkai</a>
  //     </div>
  //   );
  // };

  return (
    <main className="dashboard">
      <h1>Full Stack Open</h1>
      <p className="subtitle">Select a part to resume learning</p>

      <div className="card-container">
        {parts.map((part) => (
          <button
            className="part-card"
            key={part.id}
            onClick={() => setSelectedPart(part.id)}
          >
            <span className="part-label">{part.title}</span>
            <span className="part-description">{part.description}</span>
            <span className="card-action">Open exercises →</span>
          </button>
        ))}
      </div>
    </main>
  );
};

export default App;

