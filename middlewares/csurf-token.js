function addCsurfMiddleware(req, res, next) {
    res.locals.csrfToken = req.csrfToken();  // ✅ Corrected variable name
    next();
}
module.exports = addCsurfMiddleware;
