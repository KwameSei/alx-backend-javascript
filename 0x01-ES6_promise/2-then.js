export default function handleResponseFromAPI(promise) {
//   promise.then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   });
// }
//
  const res = { status: 200, body: 'success' };
  return promise
    .then(() => res)
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}