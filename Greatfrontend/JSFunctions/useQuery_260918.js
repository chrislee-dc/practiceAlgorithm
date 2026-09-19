import { useEffect, useState } from "react";

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn, deps = []) {
  const [state, setState] = useState({
    status: "loading",
  });

  useEffect(() => {
    let isMounted = true;

    setState({
      status: "loading",
    });

    (async () => {
      try {
        const data = await fn();
        if (isMounted) {
          setState({
            status: "success",
            data,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            status: "error",
            error,
          });
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, deps);

  return state;
}
