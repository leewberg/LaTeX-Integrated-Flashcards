function toFilename(name){
    let filename = "";
    //splits up name and makes it into a valid json filename
    return filename;
}

async function readJson(filename){
    try {
        const response = await fetch('http://localhost:8000/'+filename); //gets the JSON file using the local http server

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Error in network response');
        }

        // Parse the JSON data
        const jsonData = await response.json();
    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
    }
    //loads json file into dict...

    return jsonData;
}

async function writeJson(dict, filename){
    //loads the info from dict into filename
}

function clearJson(filename){
    writeJson({}, filename);
}

function createJson(filename){
    //makes a new and empty json-file with the filename
}

function isValidFilename(filename){
    //checks if a filename is valid, as in it only contains valid characters
}