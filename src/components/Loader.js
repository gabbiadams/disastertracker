import loadinggif from './loadinggif.gif'

//does the spinner icon when data is loading

const Loader = () => {
    return (
        <div className="loader">
            <img src={loadinggif} alt="Loading" />
            <h1>Loading</h1>
        </div>
    )
}

export default Loader