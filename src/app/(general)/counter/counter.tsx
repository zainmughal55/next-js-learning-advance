"use client";

import { useState } from "react";

// metadata won't work in a client component unless import is moved to a server component
export const metadata = {
  title: "Counter Page",
  description: "A simple counter page using React useState hook",
};

export default function CounterComponent() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {Count}</p>
      <button onClick={() => setCount(Count + 1)}>Increment</button>
    </div>
  );
}