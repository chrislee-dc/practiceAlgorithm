/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn, deps = []) {}

// export default function Component({ param }) {
//   const request = useQuery(async () => {
//     const response = await getDataFromServer(param);
//     return response.data;
//   }, [param]);

//   if (request.status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   if (request.status === 'error') {
//     const message =
//       request.error instanceof Error
//         ? request.error.message
//         : String(request.error);

//     return <p>Error: {message}</p>;
//   }

//   return <p>Data: {request.data}</p>;
// }

// Notes
// The hook should return { status: 'loading' } when it starts a new request.
// Changing deps should start a new request and ignore stale results from earlier requests.
// Unmounting should prevent pending promise callbacks from updating state.
// The hook does not need caching, retries, request deduplication, or cancellation of the underlying async operation.
