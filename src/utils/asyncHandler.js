const asynctHandler = (requestHandler) => {
   (req, res, next) => {
    promise.resolve(requestHandler(res, req, next)).catch((err) => next(err))
   }
}

export { asynctHandler }