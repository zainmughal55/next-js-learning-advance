"use client";

import { useState } from "react";

export default function TextField() {
  const [text, setText] = useState("");
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter text"
      className="block my-2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}