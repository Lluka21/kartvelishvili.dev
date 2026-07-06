import { createContext, useState } from "react";

import React from "react";

export const ThemeContext = createContext();

export default function ThemeProvider() {
  const [darkMode, setDarkMode] = useState(false);

  return <div></div>;
}
