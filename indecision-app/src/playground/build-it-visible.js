const appRoot = document.getElementById('app');

const details = 'Some details';
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && <p>{details}</p>}
        </div>
    ); 
    ReactDOM.render(template, appRoot);
};

render();