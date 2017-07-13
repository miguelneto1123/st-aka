class ClockAndModals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return(
            <div id="row0_box2" style={{width: window.innerWidth * 4 / 5, marginLeft: window.innerWidth / 5}}>
                <div id="row0_box2_div1">
                        <span id="row0_box2_table1_clock">
                            <span>{this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</span>
                        </span>
                    <span id="row0_box2_table1_help">
                            <span className="glyphicon glyphicon-exclamation-sign"
                                  data-toggle="modal" data-target={this.props.helpModalId}></span>
                        </span>
                    <span id="row0_box2_table1_settings">
                            <span className="glyphicon glyphicon-cog"></span>
                        </span>
                    <span id="row0_box2_table1_refresh">
                            <span className="glyphicon glyphicon-refresh"></span>
                        </span>
                </div>
                <div id="row0_box2_div2">
                    <div id="row0_box2_table1_selectedScenario">
                        <span id="selectedEvent">{this.props.eventName}</span>
                        <span id="selectedShow"></span>
                        <span id="selectedCont"></span>
                        <span id="selectedCat"></span>
                    </div>
                </div>
            </div>
        );
    }
}


class Row0 extends React.Component {
    constructor(){
        super();
        this.state = {
           styleBox1: {},
           styleBox2: {},
        };
    }

    componentDidMount() {
        this.setState({
            styleBox1: {
                width: window.innerWidth / 5,
                height: Math.floor(window.innerHeight*1.4/12),
            },
        });
    }

    render(){
        var sourceLogo = "bundles/aka/images/";
        const rowWidth = this.state.styleBox1.width*8/10;
        sourceLogo += rowWidth > 0 && rowWidth < 150 ? "logo100.png" : rowWidth < 200 ? "logo150.png" : "logo200.png";
        return(
            <div>
                <div id="row0_box1" style={this.state.styleBox1}>
                    <table id="row0_box1_table1">
                        <tr>
                            <td>
                                <img src={sourceLogo} />
                            </td>
                        </tr>
                    </table>
                </div>
                <ClockAndModals helpModalId="#helpModal" eventName={event}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Row0 />,
    document.getElementById('row0')
);

//=======================================================
class Row1 extends React.Component {
    constructor(){
        super();
        this.state = {
            styleBox1: {},
            styleBox2: {},
            styleBox3: {},
            styleBox4: {},
            styleBox5: {},
        };
    }

    componentDidMount() {
        this.setState({
            styleBox1: {
                width: window.innerWidth / 5,
            },
            styleBox2: {
                width: window.innerWidth / 5,
                marginLeft: window.innerWidth / 5,
            },
            styleBox3: {
                width: window.innerWidth / 5,
                marginLeft: window.innerWidth * 2 / 5,
            },
            styleBox4: {
                width: window.innerWidth / 5,
                marginLeft: window.innerWidth * 3/ 5,
            },
            styleBox5: {
                width: window.innerWidth / 5,
                marginLeft: window.innerWidth * 4 / 5,
            },
        });
    }

    render() {
        return (
            <div>
                <div id="row1_box1" style={this.state.styleBox1}>
                    <table id="row1_box1_table1">
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </table>
                </div>
                <div id="row1_box2" style={this.state.styleBox2}>
                    <table id="row1_box2_table1" class="shadow8">
                        <tr>
                            <td>
                                <div id="row1_box2_table1_infodiv"></div>
                                <div id="row1_box2_table1_inputdiv"><input type="text" id="row1_box2_table1_inputfield" /></div>
                            </td>
                            <td>
                                <div id="row1_box2_table1_buttondiv"><span class="glyphicon glyphicon-search searchbtnshow"></span></div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="row1_box3" style={this.state.styleBox3}>
                    <table id="row1_box3_table1" class="shadow8">
                        <tr>
                            <td>
                                <div id="row1_box3_table1_infodiv"></div>
                                <div id="row1_box3_table1_inputdiv"><input type="text" id="row1_box3_table1_inputfield"/></div>
                            </td>
                            <td>
                                <div id="row1_box3_table1_buttondiv"><span class="glyphicon glyphicon-search searchbtncont"></span></div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="row1_box4" style={this.state.styleBox4}>
                    <table id="row1_box4_table1" class="shadow8">
                        <tr>
                            <td>
                                <div id="row1_box4_table1_infodiv"></div>
                                <div id="row1_box4_table1_inputdiv"><input type="text" id="row1_box4_table1_inputfield"/></div>
                            </td>
                            <td>
                                <div id="row1_box4_table1_buttondiv"><span class="glyphicon glyphicon-search searchbtncat"></span></div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="row1_box5" style={this.state.styleBox5}>
                    <table id="row1_box5_table1" class="shadow8">
                        <tr>
                            <td>
                                <div id="row1_box5_table1_infodiv"></div>
                                <div id="row1_box5_table1_inputdiv"><input type="text" id="row1_box5_table1_inputfield"/></div>
                            </td>
                            <td>
                                <div id="row1_box5_table1_buttondiv"><span class="glyphicon glyphicon-search searchbtnconc"></span></div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Row1 />,
    document.getElementById('row1')
);