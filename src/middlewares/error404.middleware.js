const pageNotFound = (req, res, next) => {
    const error = new Error(`Page Not Found + ${req.url}`);
    res.status(404);
    next(error);
}

const errorMiddleware = (error, req, res, next) => {
    if(res.headerSent) return next(error)

    res.status(error.code || 500).json({message: error.message || "An unknown error occurred"})
}

export { pageNotFound, errorMiddleware }