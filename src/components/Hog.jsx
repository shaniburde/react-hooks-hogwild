
function Hogs({ hogData, onHogClick }) {

    return(
        <div className="card" onClick={onHogClick}>
            <h2 className="card-header">{hogData.name}</h2>
            <img 
                src={hogData.image} 
                alt={hogData.name}>
            </img>
        </div>
    )
}
export default Hogs;