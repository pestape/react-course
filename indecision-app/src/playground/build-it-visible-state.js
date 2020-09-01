class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.details = 'Some details';
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>{this.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'));