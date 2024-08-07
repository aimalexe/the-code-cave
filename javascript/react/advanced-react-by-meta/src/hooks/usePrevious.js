import { useEffect, useRef } from "react";

export const usePrevious = (value) => {
    const reference = useRef();
    useEffect(()=>{
        reference.current = value;
    }, [value]);

    return reference.current;
}