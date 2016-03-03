const snaprt = require('./__snaprt.jsx');

const React = snaprt.react;
const theme = snaprt.reactTheme;

module.exports = React.createClass({
    render: function() {

        return (<theme.Sitemap {...this.props} />);

    }
});
