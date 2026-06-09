import { useState } from "react";

function AccessibilityToggle() {
  const [largeText, setLargeText] =
    useState(false);

  return (
    <button
      onClick={() =>
        setLargeText(!largeText)
      }
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      {largeText
        ? "Normal Text"
        : "Large Text"}
    </button>
  );
}

export default AccessibilityToggle;
