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
