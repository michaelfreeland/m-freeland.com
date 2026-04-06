/*
* makeID
* Generates A Random 5 Character String For The Purpose Of Forcing A Page Load From The Network & Avoiding The Cache If Using A Mobile Device Web App
*/

const id = () => {
    let result = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = chars.length;
    for( let i = 0; i < 5; i++ )
        {
            result += characters.charAt( Math.floor( Math.random() * charactersLength ) );
        }
    return result;
}

export default id;