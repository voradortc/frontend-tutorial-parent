/**
 * Evaluates a string into a JS script, this method is not recommended
 *
 * @param {string} data the tag to evaluate
 */
function deprecatedEval( data ) {
    const element = document.createElement( "div" );
    let scriptElement;

    element.innerHTML = data;
    scriptElement = element.getElementsByTagName( "script" ).item( 0 );

    if ( scriptElement )
        eval( scriptElement.innerHTML );
}

export { deprecatedEval };