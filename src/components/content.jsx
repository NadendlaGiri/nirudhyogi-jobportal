function Component(props) {
    return (
        <>
            <div className="container">
                <div className="second">
                    <h2>{props.rolename}</h2>
                    <div className="favicons">
                        <img src="./src/assets/qualification.png" alt="" width="20px" height="20px"/>
                        <p>{props.qualification}</p>
                    </div>
                </div>
                <div className="second">
                    <div className="favicons">
                        <img src="./src/assets/office-building.png" alt="" width="20px" height="20px"/>
                        <h5>{props.company}</h5>
                    </div>
                    <div className="favicons">
                        <img src="./src/assets/location.png" alt="" width="20px" height="20px"/>
                        <p>{props.location}</p>
                    </div>
                    
                </div>
                <div className="second">
                    <h4>Posted On:- {props.postedON} </h4>
                </div>
                <a href={props.link}><button>Apply Now</button></a>
                
            </div>
        </>
    )    
}
export default Component;