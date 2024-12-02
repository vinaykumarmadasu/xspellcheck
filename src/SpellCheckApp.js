import React, { useState } from "react";

// Custom dictionary for spell-checking
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  // Handle input text changes
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Split text into words
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const lowerCaseWord = word.toLowerCase();
      return customDictionary[lowerCaseWord] || word;
    });

    // Find the first corrected word that differs from the original
    const firstCorrection = words.find(
      (word, index) => correctedWords[index] !== word
    );

    // Update the suggested text if a correction is found
    setSuggestedText(firstCorrection ? customDictionary[firstCorrection.toLowerCase()] : "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellCheckApp;
