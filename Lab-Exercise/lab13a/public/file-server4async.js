const http = require("http"); 
const fs = require("fs"); 
const url = require("url"); 
const path = require("path");
const fsProm = require("fs").promises;

// handler for errors 
const output500Error = (response) => { 
    response.writeHead(500, {"Content-Type": "text/html"}); 
    response.write("<h1>500 Error</h1>\n"); 
    response.write("Something went wrong with request\n"); 
    response.end(); 
}; 

// maps file extention to MIME types 
const mimeTypes = [ 
    ['.html', 'text/html'], 
    ['.json', 'application/json'], 
    ['.jpg', 'image/jpeg'], 
    ['.svg', 'image/svg+xml'] 
   ]; 

   const server = http.createServer( async (req, resp) => { 
    // get the filename from the URL 
    let urlFile = url.parse(req.url).pathname; 
    // if no file provided in request, default to index.html 
    if (urlFile.length == 1) urlFile = "/index.html"; 
    console.log("Filename in URL=" + urlFile); 
    // turn it into the actual file system filename 
    const localPath = __dirname; 
    let localFile = path.join(localPath, urlFile); 
    console.log("Filename on device=" + localFile); 
    // try reading the file 
    fs.readFile(localFile, (err, file) => { 
    if (err) { 
    output500Error(resp); 
    return; 
    } 

    // read the file 
    try { 
        const contents = await 
        // based on the URL path, extract the file extension 
        const ext = path.parse(urlFile).ext; 
        // lookup mime type for this extension 
        const mime = mimeTypes.find( m => m[0] == ext); 
        
        // specify the mime type of file via header 
        const header = { "Content-type": mime[1] || 
        "text/plain" }; 
        resp.writeHead(200, header); 
        // output the content of file 
        resp.write(contents); 
        resp.end(); 
    }
    catch {
        output500Error(resp);
    }

    }); 
   });
   
   
   
   let port = 8080; 
   server.listen(port); 
   console.log("Server running at port= " + port);