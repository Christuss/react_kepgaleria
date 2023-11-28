function Kep(props) {
    function kattintasKezelo() {
        props.nagyKepCsere(props.id)
    }

    return (
        <div>
        <img src={props.src} alt = {props.alt} onClick = {kattintasKezelo}/>
        </div>
    );
}
export default Kep;