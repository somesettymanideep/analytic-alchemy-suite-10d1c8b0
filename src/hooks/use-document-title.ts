import { useEffect } from "react";

/** Sets the browser tab title for the page it's called from, restoring the previous title on unmount. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Nextgenlytics`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
