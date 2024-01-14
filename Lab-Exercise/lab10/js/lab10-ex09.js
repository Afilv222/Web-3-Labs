document.addEventListener("DOMContentLoaded", function() {
   console.log('Testing Promises');
   document.querySelector('#catButton').addEventListener('click', () => {
      simplePromise('cats.jpg');
   });
   document.querySelector('#farmButton').addEventListener('click', () => {
      simplePromise('farm.jpg');
   });
   document.querySelector('#mistakeButton').addEventListener('click', () => {
      simplePromise('mistake.jpg');
   });  
   document.querySelector('#chainedButton').addEventListener('click', () => {
      chainedPromises('cats.jpg');
   });  
   document.querySelector('#simultaneousButton').addEventListener('click', () => {
      simultaneousPromises('afewdogs.jpg');
   });    


});

function saveInCloud(filename) {
   // some sample filenames to simulate existing files
   const existingFiles = ['cats.jpg', 'family.jpg','afewdogs.jpg', 'farm.jpg'];
   return new Promise( (resolve, reject) => {
      console.log('saving to cloud ...');
      // to simulate time delay in working with external
      // service, do the next steps after a time delay
      setTimeout(() => {
         let cloudURL = `http://bucket.s3-awsregion.amazonaws.com/makebelieve/${filename}`;

         if ( existingFiles.some( file => file == filename) ) {
            resolve(cloudURL)
         }else{
            reject( new Error(`${filename} does not exist`)); 
         }

      },2000);
   });
}



function simplePromise(filename) {
   saveInCloud(filename)
      .then( url => {
         console.warn(`Cloud URL for ${filename} is ${url}`);
   })
      .catch(err => {
         console.error(err);
   });      
}

function chainedPromises(filename) {
   
   // Why do the first two then() callbacks return another function? Remember that the then() function
   // should always return a Promise. We want these two actions (create thumbnail and create thumbnail)
   // to happen after the saveInCloud, so they are chained together
   let cloudURL;
   saveInCloud(filename)
      .then( url => {
         console.warn(`Cloud URL for ${filename} is ${url}`);
         cloudURL = url;
         return tagImageContent(url);
   })
      .then( tags => {
         console.warn('Returned tags=' + tags);
         return createThumbnail(cloudURL);
   })
      .then ( url => {
         console.warn('Thumbnail url=' + url);
   })
      .catch(err => {
         console.error(err);
   });
}

function simultaneousPromises(filename) {
   saveInCloud(filename)
   .then( url => {
      console.warn(`Cloud URL for ${filename} is ${url}`);
      Promise.all([ tagImageContent(url), createThumbnail(url) ])
      .then(resolves => {
         // do something with array of responses
         const [tags, thumbURL] = resolves;
         console.warn(`Returned tags=${tags} thumbnail=${thumbURL}`)
      })
      .catch(err => {
         console.error(err);
      });
   })
   .catch(err => {
   console.error(err);
   });

}

function tagImageContent(url) {
   
   return new Promise ( (resolve, reject) => {
      
      console.log(`Using ML to tag ${url} ...`);
      
      // list of sample tags
      const tags = ['fun', 'animal', 'cute'];
      
      // for now simply resolve after a 3 second delay
      setTimeout( () => resolve(tags), 3000);

   });
}

function createThumbnail(url) {
   
   return new Promise( (resolve, reject) => {
   
      console.log(`Creating thumbnail of ${url} ...`);
      
      // simply resolve after a second with a fake CDN url
      const thumbURL = "https://res.cloudinary.com/myapp/totallyfake.jpg";
      
      setTimeout( () => resolve(thumbURL), 1000);
   });
} 




    