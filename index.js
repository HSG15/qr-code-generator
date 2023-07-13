import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        'message' : 'Type in your URL:',
        'name' : 'URL'
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url);

    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr-img.png'));
 
    fs.writeFile('URLs.txt', url, err => {
        if(err) throw err;
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });