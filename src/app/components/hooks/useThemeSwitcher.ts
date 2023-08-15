import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme:dark)";
  const [mode, setMode] = useState("");
  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");
    function handleChange() {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
          

        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      } else {
        let check = mediaQuery.matches ? "dark" : "light";
        
        
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.remove("light");
          document.documentElement.classList.add("dark");
          
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.classList.add("light");
        }
      }
    }
   
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
 if(mode==="dark"){
  window.localStorage.setItem("theme","dark")
  document.documentElement.classList.add("dark"); 
  document.documentElement.classList.remove("light"); 
}
else {
  window.localStorage.setItem("theme","light")
  document.documentElement.classList.add("light"); 
  document.documentElement.classList.remove("dark"); 

}



  }, [mode]);
  return [mode,setMode] as const;
}
