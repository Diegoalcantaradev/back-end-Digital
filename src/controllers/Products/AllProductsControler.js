module.exports = (request, response) => {
    response.json([
        {
            products:10
        },
        {
            users:5
        }
    ]);
}