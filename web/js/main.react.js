class Test extends React.Component {
    render() {
        return (
            <button type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
            </button>
        );
    }
}

ReactDOM.render(
    <Test/>,
    //<h1>Hey</h1>,
    document.getElementById("root")
);