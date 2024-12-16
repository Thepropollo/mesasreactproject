import { useEffect } from 'react';

const useDynamicCSS = (cssPath) => {
    useEffect(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssPath;
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [cssPath]);
};

export default useDynamicCSS;
    