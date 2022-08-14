const QRCode = require('easyqrcodejs-nodejs');



var options = {
    // ====== Basic
    text: "https://connect.thebusinesscard.be/c/4abd6317-fd76-43b8-ad50-a89001c1f981",
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H

    // ====== dotScale
    
    dotScale: 1, // For body block, must be greater than 0, less than or equal to 1. default is 1

    dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
    dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
    dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1

    dotScaleA: 1, // Dafault for alignment block, must be greater than 0, less than or equal to 1. default is 1
    dotScaleAO: undefined, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
    dotScaleAI: undefined, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1
    

    // ====== Quiet Zone
    /*
    quietZone: 0,
    quietZoneColor: "rgba(0,0,0,0)",
    */

    // ====== Logo
 
    //logo: "../demo/logo.png", // Relative address, relative to `easy.qrcode.min.js`
    logo: "https://cdn.discordapp.com/attachments/936383132834340924/1008481113376825364/logo_meyware.png", 
    //logoWidth: 300, // fixed logo width. default is `width/3.5`
    //logoHeight: 300, // fixed logo height. default is `heigth/3.5`
    logoMaxWidth: undefined, // Maximum logo width. if set will ignore `logoWidth` value
    logoMaxHeight: undefined, // Maximum logo height. if set will ignore `logoHeight` value
    //logoBackgroundColor: '#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    logoBackgroundTransparent: true, // Whether use transparent image, default is false
    

    // ====== Backgroud Image
    /*
    backgroundImage: 'https://cdn.discordapp.com/attachments/936383132834340924/1008481113376825364/logo_meyware.png', // Background Image
    backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
    autoColor: true, // Automatic color adjustment(for data block)
    autoColorDark: "rgba(0, 0, 0, .6)", // Automatic color: dark CSS color
    autoColorLight: "rgba(255, 255, 255, .7)", // Automatic color: light CSS color
    */

    // ====== Colorful
    // === Posotion Pattern(Eye) Color
    
    PO: '#e1622f', // Global Posotion Outer color. if not set, the defaut is `colorDark`
    PI: '#aa5b71', // Global Posotion Inner color. if not set, the defaut is `colorDark`
    PO_TL:'', // Posotion Outer color - Top Left 
    PI_TL:'', // Posotion Inner color - Top Left 
    PO_TR:'', // Posotion Outer color - Top Right 
    PI_TR:'', // Posotion Inner color - Top Right 
    PO_BL:'', // Posotion Outer color - Bottom Left 
    PI_BL:'', // Posotion Inner color - Bottom Left 
    
    // === Alignment Color
    
    AO: '', // Alignment Outer. if not set, the defaut is `colorDark`
    AI: '', // Alignment Inner. if not set, the defaut is `colorDark`
    
    // === Timing Pattern Color
    
    timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
    timing_H: '', // Horizontal timing color
    timing_V: '', // Vertical timing color
    

    // ====== Title
    /*
    title: 'QR Title', // content 
    titleFont: "normal normal bold 18px Arial", //font. default is "bold 16px Arial"
    titleColor: "#004284", // color. default is "#000"
    titleBackgroundColor: "#fff", // background color. default is "#fff"
    titleHeight: 70, // height, including subTitle. default is 0
    titleTop: 25, // draws y coordinates. default is 30
    */

    // ====== SubTitle
    /*
    subTitle: 'QR subTitle', // content
    subTitleFont: "normal normal normal 14px Arial", // font. default is "14px Arial"
    subTitleColor: "#004284", // color. default is "4F4F4F"
    subTitleTop: 40, // draws y coordinates. default is 0
    */

    // ===== Event Handler
    /*
    onRenderingStart: undefined,
    */

    // ==== Images format
    /*
    format: 'PNG', // 'PNG', 'JPG'
    compressionLevel: 6, // ZLIB compression level (0-9). default is 6
    quality: 0.75, // An object specifying the quality (0 to 1). default is 0.75. (JPGs only) 
    */

    // ==== Versions
    /*
    version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
    */     

    // ===== Binary(hex) data mode
    /*
    binary: false, // Whether it is binary mode, default is text mode. 
    */ 

    // =====  UTF-8 without BOM
    /*
    utf8WithoutBOM: true
    */        
}



var qrcode = new QRCode(options);

// Save QRCode image
qrcode.saveImage({
	path: 'q.png' // save path
});