import { useEffect, useMemo, useState } from "react";

export function useMediaQuery(size: number) {
    const mediaQuery = useMemo(
        () => window.matchMedia(`(min-width: ${size}px)`),
        [size],
    );
    const [match, setMatch] = useState(mediaQuery.matches);

    useEffect(() => {
        const onChange = () => setMatch(mediaQuery.matches);
        mediaQuery.addEventListener("change", onChange);

        return () => mediaQuery.removeEventListener("change", onChange);
    }, [mediaQuery]);

    return match;
}
