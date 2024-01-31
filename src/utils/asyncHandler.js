const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
        .catch((error) => {
            console.log(error.message)
            return next(error.message);
        })
    }
}

export default asyncHandler;