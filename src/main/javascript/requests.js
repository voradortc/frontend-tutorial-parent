/**
 * Executes an HTTP request
 *
 * @param {string} method the method to use
 * @param {string} url the url to call
 * @returns {Promise<*>} the promise that will act on service completion
 */
function executeRequest( method, url ) {
    return fetch( url, { method } ).then( checkResponse );
}

/**
 * Event handler for the XMLHttpRequest ready state change event
 *
 * @param {Response} response the response that launched this handler
 */
function checkResponse( response ) {
    if ( response.ok && 200 === response.status )
        return response.json();
    else
        throw new Error( `${response.status}: ${response.statusText}` );
}

export { executeRequest };