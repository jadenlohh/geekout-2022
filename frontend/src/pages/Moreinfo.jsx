// import React from 'react';
// import NavigationBar from '../components/NavigationBar';
// import test from '../images/flower.jpeg';
// import logo from '../images/hearing.png';
// import logo1 from '../images/hearing1.png';
// import logo2 from '../images/hearing2.png';
// import logo3 from '../images/hearing3.png';
// import aboutus4 from '../images/aboutus4.png';
// import aboutus3 from '../images/aboutus3.png';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Row, Col, Card, Button } from 'react-bootstrap';

// const testAlign = {
//     textAlign : 'center',
//     fontSize : 15,

// }
//  const TEXT = {
//      fontSize : 18,
//      }
// const Header = {
//      fontSize : 24,
    

//  }

// const pics1 = {
//     height : 600 ,
//     width : 1200 ,
// }

// // const pics2 = {
// //     height : 250 ,
// //     width : 300,
// // }

// // const topleft = {
// //     marginLeft: 150,
// //     marginTop: 10
// // }

// const middle = {
//     marginLeft: 200,
//     marginTop: 50,
// }

// const myList = ['Data created by specialised reknowed doctors to help with hearing ', 'Will be able to consult a specialise doctor when you have accumlated enough data', 'Data report generated to help you see if your hearing is improving '];   
// const listItems = myList.map((myList)=>{   
//     return <li>{myList}</li>;   
// });  

// const myList1 = ['Experience the latest design specially designed to help each one of you ', 'Catered to every individual', 'Do 1 testing for 5 minutes a day will help you to improve your hearing', 'Health experts anaylsis designed to help you '];   
// const listItems1 = myList1.map((myList1)=>{   
//     return <li>{myList1}</li>;   
// }); 

// function Moreinfo() {
//     return (
//         <>
//             <NavigationBar/>
//             <h1 style = {{...testAlign,...Header}}> About Us </h1>
//             <img className="d-flex p-5 col-example" style = {{...pics1,...middle}} src= {aboutus4} />
//             <h3 style = {{...TEXT,...testAlign}}> This page is to detect sign of hearing loss in the early stage</h3>
//             <h3 style = {{...TEXT,...testAlign}}> The test in the website was made through from many researches and collaboration to make it accurate in predicting hearing loss</h3>
//             <br></br>
//             <h3 style = {{...TEXT,...testAlign}}> {listItems1} </h3>
//             <br></br>
//             <br></br>
//             <img className="d-flex p-5 col-example" style = {{...pics1,...middle}} src= {aboutus3} />
//             <h3 style = {{...TEXT,...testAlign}}>About our Data sector and the next steps. </h3>
//             <br></br>
//             <h3 style = {{...TEXT,...testAlign}}> {listItems} </h3>
            
//         </>
//     )
// }
// ;
  
// export default Moreinfo  ;

// {/* <h1 style = {testAlign} >We  have  created a website for you to help you personally to improve your hearing </h1>
//             <br></br>
//             <Row className="justify-content-between">
//                 <Col md="5" className="rounded float-left" style={topleft}>
//                     <img className="d-flex p-5 col-example" style = {pics1} src= {logo} />
//                     <h1 style = {{...testAlign, ...Header}} >What is Hearing Loss </h1>
//                     <h3 style = {TEXT}> Hearing loss is quite common. A hearing loss can be caused by many factors, but age and noise exposure are the two most common causes. You can have a hearing loss in one ear or in both ears. In this guide, you will get an explanation of what a hearing loss is and find facts about the causes and symptoms of hearing loss. You will also find information about how to treat hearing loss. </h3>
//                 </Col>
                

//                 <Col md="4" className="rounded float-left" style={topright}>
//                     <img className="d-flex p-5 col-example" style = {pics1} src= {logo1} />
//                     <h1 style = {{...testAlign, ...Header}} >Types of Hearing loss </h1>
//                     <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
//                 </Col> 
//             </Row>
//             <br></br>
//             <br></br>
//             <br></br>

//             <Row className="justify-content-between">
//                 <Col md="5" className="rounded float-left" style={topleft}>
//                     <img className="d-flex p-5 col-example" style = {pics1} src= {logo2} />
//                     <h1 style = {{...testAlign, ...Header}} >Importance of taking care of ur hearing  </h1>
//                     <h3 style = {TEXT}> The ears are the most visible part of the human hearing system. Taking care of your ears is important in many ways. Cleaning is one step, while preventing and treating infections is another. Ear care also include taking steps to avoid unnecessary noise and watching for possible hearing loss. </h3>
//                 </Col>
                

//                 <Col md="4" className="rounded float-left" style={topright}>
//                     <img className="d-flex p-5 col-example" style = {pics1} src= {logo3} />
//                     <h1 style = {{...testAlign, ...Header}} >Solutions </h1>
//                     <h3 style = {TEXT}>Several options are available for hearing loss, ranging from medical treatment to listening devices, such as hearing aids. Treatment depends of the cause and severity of hearing loss. For age-related hearing loss, there is no cure, but hearing aids and other listening devices help treat the problem and improve quality of life.</h3>                
//                 </Col> 
//             </Row>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br> */}

//             {/* <Row className="justify-content-between">
//                 <Col md="2" className="rounded float-left" style={topleft}>
//                     <img className="d-flex p-5 col-example" style = {pics2} src= {logo2} />
//                     <h3 style = {TEXT}> JF YFIY IYFY YFYIC TRYTIKUBLGUITIGGOUGHOUAtstuutdutfdiyr6roljh ougolgouigtvoihc;oyo xo;7tk v7igoutoivouh ouoti7bpgout or8y ob7tyi ceio7itui vdiytit yfoyo8ti  </h3>
//                 </Col>
                
//                 <Col md="2" className="rounded float-left" style={topright}>
//                     <img className="d-flex p-5 col-example" style = {pics2} src= {logo} />
//                     <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
//                 </Col> 

//                 <Col md="2" className="rounded float-left" style={topright}>
//                     <img className="d-flex p-5 col-example" style = {pics2} src= {logo} />
//                     <h3 style = {TEXT}> TESTETSTETETTSSTSVUTEDVVXVBGCIHR HUkjjdbrv oh w80u f08ug08je0g0j gf 9w0jrf wuwp99fu 0 </h3>                
//                 </Col>
//             </Row> */}
           