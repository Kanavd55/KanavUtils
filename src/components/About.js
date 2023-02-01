import React from "react";

export default function About(props){

    /*const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })*/

    //const [btnText,setBtnText]=useState('Enable Light Mode');

    /*const toggleClick=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
            props.showAlert("Light Mode for About us section has been enabled","success");
        }else{
            setMyStyle({
                color:'white',
                backgroundColor:'#102d46'
            })
            setBtnText("Enable Light Mode");
            props.showAlert("Dark Mode for About us section has been enabled","success");
        }
    }*/
    return(
            <div className="container py-2" style={{color:`${props.mode==='light'?'black':'white'}`,backgroundColor:`${props.mode==='light'?'white':'#102d46'}`}}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={{color:`${props.mode==='light'?'black':'white'}`,backgroundColor:`${props.mode==='light'?'white':'#102d46'}`}} >
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={{color:`${props.mode==='light'?'black':'white'}`,backgroundColor:`${props.mode==='light'?'white':'#102d46'}`}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Developer Info</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Kanav is a passionate web developer.This is his first react app.This app is built using bootstrap and react.When hs's not working you can find him playing guitar,listening music,playing board games with his family or at a music concert.
            </div>
            <ul>
                <li>
                    <strong>Kanav's Instagram</strong> @kanavvv_
                </li>
                <li>
                    <strong>Kanav's Facebook</strong> @Kanav Dahat
                </li>
                <li>
                    <strong>Kanav's Email</strong> @kanavdahat55@gmail.com
                </li>
            </ul>
        
        </div>
    </div>
    {/*<button type="button" onClick={toggleClick} class="btn btn-success my-3">{btnText}</button>*/}
    </div>
    </div>
    )
}