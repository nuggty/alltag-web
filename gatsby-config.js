module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-styletron",
            options: {
                // You can pass options to Styletron.
                // Prefix all generated classNames:
                prefix: "_",
            },
        },
    ],
};