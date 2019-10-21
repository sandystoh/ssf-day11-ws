const express = require("express");
const app = express();
const PORT_NUMBER = process.env.PORT | 3000;
const staticfolder = __dirname + '/public';

app.use(express.static(staticfolder, {index: "default.html"}));	

//app.use('/video', express.static(__dirname + "/public/video.html"));	

// app.use('/audio', express.static(__dirname + "/public/audio.html"));	

app.get("/audio", (req,res,next)=>{
    res.status(200).sendFile(staticfolder+'/audio.html');
});

app.get("/video", (req,res,next)=>{
    res.status(200).sendFile(staticfolder+'/video.html');
});

// MAKE SURE THE FALLTHROUGH IS THE LAST ROUTE
app.use((req,res,next)=>{
    res.redirect('/error.html');
});

app.listen(PORT_NUMBER, () => {
    console.log(`App listening on ${PORT_NUMBER}`);
})