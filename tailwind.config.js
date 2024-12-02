/** @type {import('../learning_webrust/tailwind-yew-setup-test2/tailwindcss').Config} */
module.exports = {
    content: ['public_html/index.html'],

    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
    ],
};
