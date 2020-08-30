


function getPdf(req,response) {
    const fs = require('fs');
    const pdf = require('html-pdf');
    var htmlString = fs.readFileSync('C:\\Users\\Eric\\Desktop\\cv-builder\\backend\\assets\\index.html', 'utf8');

    const options = { format: 'Letter' };
    pdf.create(htmlString, options).toFile('./resume.pdf', (err,res) => {
        if(err) {
            console.log('we have some error',err)
        }
        response.send(res);
    })    
}

module.exports = {
    getPdf
}