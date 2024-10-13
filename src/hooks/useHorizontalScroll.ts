// useHorizontalScroll.ts
import { useEffect } from "react";

const useHorizontalScroll = (ref: React.RefObject<HTMLElement>) => {
    useEffect(() => {
        const listContainer = ref.current;

        if (listContainer) {
            const handleWheel = (event: WheelEvent) => {
                if (listContainer.scrollWidth > listContainer.clientWidth) {
                    event.preventDefault();
                    listContainer.scrollLeft += event.deltaY;
                }
            };

            listContainer.addEventListener('wheel', handleWheel);

            return () => {
                listContainer.removeEventListener('wheel', handleWheel);
            };
        }
    }, [ref]);
};

export default useHorizontalScroll;
