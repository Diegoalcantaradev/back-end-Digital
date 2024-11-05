module.exports = (request, response, next) => {
    request.body.password = btoa(request.body.password);
    next();
}