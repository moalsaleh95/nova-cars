import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {                    
    const [isDark, setIsDark] = useState(false);

    // const toggleDarkMode = () => {
    //     localStorage.theme === 'light' ? switchToDark() : switchToLight();
    // }

    const switchToDark = () => {
        setIsDark(true);

        // if (!htmlAttribute) return;
        const htmlAttribute = document.querySelector('html');
        !htmlAttribute?.classList.contains('dark') && htmlAttribute?.classList.add("dark");

        const rootElement = document.getElementById("root")
        if (!rootElement && !rootElement) return
        rootElement.style.backgroundColor="#222222";
        localStorage.theme = 'dark';
    }

    const switchToLight = () => {
        setIsDark(false);

        // if (!htmlAttribute) return;
        const htmlAttribute = document.querySelector('html');
        htmlAttribute?.classList.remove("dark");
        localStorage.theme = 'light';

        const rootElement = document.getElementById("root")
        if (!rootElement && !rootElement) return
        rootElement.style.backgroundColor="#f9f9f9";
    }

    useEffect(()=> {
      window.matchMedia("(prefers-color-scheme: dark)").matches ? switchToLight() : switchToLight();
      // isDark ? switchToDark() : switchToLight();
    }, [isDark])

  return (
    // <button className='border-4 border-black dark:border-white dark:text-white'
    //     onClick={()=> toggleDarkMode()}
    // >
    //     switch mode
    // </button>
    <></>
  )
}

export default DarkModeSwitch