export const promiseSerial = (funcs, props) => funcs.reduce(
  (promise, func) => promise.then(result => func(props).then(Array.prototype.concat.bind(result))),
  Promise.resolve([]),
);

export function verifyRouterData(arr) {
  // const obj = { ...arr.filter(e => e) };
  const obj = { ...arr };
  let result = {};
  // Foreach to verify data before merge to object result
  Object.keys(obj).forEach((o) => {
    if (typeof obj[o] === 'object') {
      result = Object.assign({}, result, obj[o]);
    }
  });

  return result;
}

export function rejectErrorObject(obj) {
  const error = new Error();
  error.message = obj;
  return error;
}

export function makeCancelable(promise) {
  let hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise
      .then(val => (
        hasCanceled
          ? reject(rejectErrorObject({ isCanceled: true }))
          : resolve(val)
      ))
      .catch(error => (
        hasCanceled
          ? reject(rejectErrorObject({ isCanceled: true }))
          : reject(error)
      ));
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled = true;
    },
  };
}
