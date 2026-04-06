/**
 * Cached
 * Checks If User Is Using Standalone iOS Web App To Force Loading Assets From The Network Rather Than The Cache
 */

 import id from "./id";

 const cached = () => {
    if( ( "standalone" in window.navigator ) && window.navigator.standalone )
        {
            document.location.href = `https://m-freeland.com/?=${id()}`;
        }
    else
        {
            return;
        }
 }

 export default cached;