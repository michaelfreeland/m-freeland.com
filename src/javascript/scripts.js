import load from "./modules/load";
import viewport from "./modules/viewport";
import cached from "./modules/cached";

window.addEventListener( "load", cached, { once: true } );

viewport();

window.addEventListener( "DOMContentLoaded", load, {once: true}, true );
window.addEventListener( "resize", viewport );