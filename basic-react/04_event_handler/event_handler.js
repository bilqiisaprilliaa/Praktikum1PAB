class Tombol extends React.Component {
    handleButtonClick = () => {
        alert(this.props.pesan);
    }

    render() {
        return (
            <button onClick={this.handleButtonClick} style={{margin:"10px"}}>
                {this.props.children}
            </button>
        )
    }
}

class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <Tombol pesan="Belajar React">React</Tombol>
                <Tombol pesan="Belajar Javascript">Javascript</Tombol>
            </div>
        )
    }
}

const myElement = <MyApp />;
const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

