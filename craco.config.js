module.exports = {
    style: {
        postcss: {
            plugins: [
                // require('postcss-import'),
                // require('tailwindcss/nesting'),
                require('tailwindcss')('./src/tailwind/tailwind.config.js'),
                require('autoprefixer')
            ]
        }
    },
    babel: {
        plugins: [
            'babel-plugin-twin',
            'babel-plugin-macros',
            '@emotion/babel-plugin',
            [
                '@emotion/babel-plugin-jsx-pragmatic',
                {
                    export: 'jsx',
                    import: 'cssprop',
                    module: '@emotion/react'
                }
            ],
            [
                '@babel/plugin-transform-react-jsx',
                {
                    pragma: 'cssprop',
                    pragmaFrag: 'React.Fragment'
                }
            ]
        ]
    }
};