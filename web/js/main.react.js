function Row0Span (props) {
    return (
       <span id={props.id} className={props.class}>
           {props.value}
       </span>
    );
}

function Row0Div (props){
    return (
        <div id={props.id} className={props.class} style={props.style}>
           {props.value}
       </div>
    );
}

class Row0 extends React.Component {
    constructor(){
        super();
        this.state = {
           styleBase: {},
           styleBox1: {},
           styleBox2: {},
        };
    }

    componentDidMount() {
        this.setState({
            styleBase: {
                width: window.innerWidth,
                height: Math.floor(window.innerHeight*0.7/12),
            },
            styleBox1: {
                width: window.innerWidth / 5,
                height: Math.floor(window.innerHeight*1.4/12),
            },
            styleBox2: {
                width: window.innerWidth * 4 / 5,
                height: Math.floor(window.innerHeight*0.7/12),
                marginLeft: window.innerWidth / 5,
            },
        });
    }

    render(){
        var sourceLogo = "../images/";
        const rowWidth = this.state.styleBox1.width*8/10;
        sourceLogo += rowWidth > 0 && rowWidth < 150 ? "logo100.png" : rowWidth < 200 ? "logo150.png" : "logo200.png";
        return(
            <div style={this.state.styleBase} className="notop">
                <Row0Div
                    value={
                        <table id="row0_box1_table1">
                            <tr>
                                <td>
                                    <img src={sourceLogo} />
                                </td>
                            </tr>
                        </table>
                    }
                    style={this.state.styleBox1}
                    id="row0_box1"
                />
                <div id="row0_box2" style={this.state.styleBox2}>
                    <Row0Div
                        value={
                            <div>
                                <Row0Span
                                    value={
                                        <span>{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</span>
                                    }
                                    id="row0_box2_table1_clock"
                                />
                                <Row0Span
                                    value={
                                        <span className="glyphicon glyphicon-exclamation-sign" data-toggle="modal" data-target="#helpModal"></span>
                                    }
                                    id="row0_box2_table1_help"
                                />
                                <Row0Span
                                    value={
                                        <span className="glyphicon glyphicon-cog"></span>
                                    }
                                    id="row0_box2_table1_settings"
                                />
                                <Row0Span
                                    value={
                                        <span className="glyphicon glyphicon-refresh"></span>
                                    }
                                    id="row0_box2_table1_refresh"
                                />
                            </div>
                        }
                        id="row0_box2_div1"
                    />
                    <Row0Div
                        value={
                            <div id="row0_box2_table1_selectedScenario">
                                <span id="selectedEvent">Schulungsevent</span>
                                <span id="selectedShow"></span>
                                <span id="selectedCont"></span>
                                <span id="selectedCat"></span>
                            </div>
                        }
                        id="row0_box2_div2"
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Row0 />,
    document.getElementById('row0')
);