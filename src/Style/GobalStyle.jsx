import { createGlobalStyle } from "styled-components";

const GlobaStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
text-decoration:none;


}
body {
   
background-color: #808080;
font-family:sans-serif;

 
img{
width: 50px;
height: 200px;
object-fit: contain;
}
}

`
export default GlobaStyle;