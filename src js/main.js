const { QRCodeStyling } = require("qr-code-styling-node/lib/qr-code-styling.common.js");
const nodeCanvas = require("canvas");
const { JSDOM } = require("jsdom");
const fs = require("fs");
const sharp = require('sharp');
const fetch = require('node-fetch');
const fileType = require('file-type');

var dataInput = process.argv[2];
var imageInput = process.argv[3];
var widthInput = process.argv[4];
var heightInput = process.argv[5];
var dotsColorInput = process.argv[6];
var dotOptions = process.argv[7];
var backgroundColorInput = process.argv[8];

if (widthInput == undefined) {
    widthInput = "300";
}
if (heightInput == undefined) {
    heightInput = "300";
}
if (dotsColorInput == undefined) {
    dotsColorInput = "#4267b2";
}
if (dotOptions == undefined) {
    dotOptions = "rounded";
}
if (backgroundColorInput == undefined) {
    backgroundColorInput = "#e9ebee";
}

const roundedCorners = Buffer.from(
    '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
  );

  
const fetchImage = async() => {
  const image = await fetch(imageInput).then(res => res.buffer())
  .then(buffer => fileType(buffer));
  const imageBuffer = await image.buffer();
  sharp(imageBuffer).composite([{
    input: roundedCorners,
    blend: 'dest-in'}]).png().toFile("out.png");
}

fetchImage();



    


const options = {
    width: widthInput.toString(),
    height: heightInput.toString(),
    data: dataInput.toString(),
    image: imageInput.toString(),
    dotsOptions: {
        color: dotsColorInput.toString(),
        type: dotOptions.toString()
    },
    backgroundOptions: {
        color: backgroundColorInput.toString(),
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
        hideBackgroundDots: true,
        imageSize: 0.6
    },
    qrOptions : {
        errorCorrectionLevel: 'H'
    },
    cornersSquareOptions : {
        type : 'extra-rounded',
        gradient : {
            colorStops : [{ offset: 0, color: 'blue' }, { offset: 1, color: 'red' }]
        }
    }
}




// For canvas type
const qrCodeImage = new QRCodeStyling({
    nodeCanvas, // this is required
    ...options
});

qrCodeImage.getRawData("png").then((buffer) => {
  fs.writeFileSync("test.png", buffer);
});