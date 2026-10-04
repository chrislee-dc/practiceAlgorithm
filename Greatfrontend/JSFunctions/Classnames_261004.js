/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
  const getClassNames = (value) => {
    if (!value) {
      return [];
    }

    if (typeof value === "string" || typeof value === "number") {
      return [value];
    }

    if (Array.isArray(value)) {
      return value.flatMap(getClassNames);
    }

    if (typeof value === "object") {
      return Object.entries(value)
        .filter(([, enabled]) => enabled)
        .map(([className]) => className);
    }

    return [];
  };

  return getClassNames(args).join(" ");
}
