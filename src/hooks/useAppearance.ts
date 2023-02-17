import React, { useEffect, useState } from 'react';

const useAppearance = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>();

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
          } else setIsDarkMode(false);
    }, []);

    return isDarkMode;
};

export default useAppearance;