var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var randomstring = require('randomstring');
var EJS = require('ejs');

const fs = require('fs');

// invoke an instance of express application.
var app = express();

// set our application port
app.set('port', 8080);

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({ extended: true }));

// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 1200000  // In 20 minutes session Id expires   //// In 25 minutes 1500000 ms Id expires  //// In 15 minutes 900000 ms Id expires
    }
}));


app.set('view engine', 'ejs');


// another way
app.get('/', (req, res) => {
    res.redirect('/login');
});

// route for user Login
app.get('/login', (req, res) => {
    console.log("\nRequest: " + req.url);
    res.sendFile(__dirname + '/public/login/login.html');
});

// favicon nad logo
app.get('/favicon', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/favicon.png');
});
app.get('/logo', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/logo.png');
});



//===================  //============================================================================
// HANDLES ==========  // I'm not a nodeJS expert but I believe, getting the stuff done is first step
//===================  //============================================================================



//+++++++++++
// GET PAGES
//+++++++++++



//1-10

//1
app.get('/wQprmokn', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//2
app.get('/3itpYkux', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//3
app.get('/XeuziX6j', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//4
app.get('/zeL8rjHX', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//5
app.get('/ThFzS7K3', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//6
app.get('/cgo53YPj', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//7
app.get('/Pv9mEa9a', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//8
app.get('/oyH7ioDJ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//9
app.get('/vu5K43cq', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//10
app.get('/y7vjcQSH', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});





//11-20

//11
app.get('/VMhCG5sU', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//12
app.get('/C88afisn', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//13
app.get('/rtsDZorj', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//14
app.get('/mnNXBWZC', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//15
app.get('/vpGeS7gu', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//16
app.get('/c5ho257S', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//17
app.get('/V2KLKSY7', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//18
app.get('/FN4CyZZ6', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//19
app.get('/kdDxf9X8', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//20
app.get('/wPHtWiPq', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});



/*

//21-30

//21
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//22
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//23
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//24
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//25
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//26
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//27
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//28
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//29
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//30
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});


*/

//31-40

//31
app.get('/D8hu2tsE', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//32
app.get('/5nwtXm44', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//33
app.get('/tSR9wKXT', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//34
app.get('/LMtTWicY', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//35
app.get('/qekUd7Qq', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//36
app.get('/vEEPiW9a', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//37
app.get('/BtY6o5WX', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//38
app.get('/DR53Bkyx', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//39
app.get('/M9qpRUso', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//40
app.get('/WQNV4VYH', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});




//41-50

//41
app.get('/Bt46HgeQ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//42
app.get('/4dnKxWDj', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//43
app.get('/BeEKVpUP', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//44
app.get('/m7399pbD', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//45
app.get('/jdWXDebX', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//46
app.get('/pujDe49V', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//47
app.get('/cixtK59G', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//48
app.get('/6S4vmZsJ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//49
app.get('/LuFWzRNA', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//50
app.get('/F4qWQJ5d', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});



/*
//51-60

//51
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//52
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//53
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//54
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//55
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//56
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//57
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});


//58
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//59
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

//60
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.html');
});

*/





//++++++++++++
// GET IMAGES
//++++++++++++

//1-10

//1
app.get('/UXAHN', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//2
app.get('/KHLUC', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//3
app.get('/VHDHQ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//4
app.get('/ZWASH', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//5
app.get('/RECTZ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//6
app.get('/GBLCF', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//7
app.get('/TSQSP', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//8
app.get('/TSQSP', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//9
app.get('/SWMLA', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//10
app.get('/LGLAA', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});




//11-20

//11
app.get('/SRVFZ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//12
app.get('/MLRSB', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//13
app.get('/TCQEL', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//14
app.get('/QQRUH', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//15
app.get('/PNHAN', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//16
app.get('/CXFWB', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//17
app.get('/FKRXJ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//18
app.get('/GPWDC', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//19
app.get('/SLNDG', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//20
app.get('/VKKSW', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});



/*
//21-30

//21
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//22
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//23
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//24
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//25
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//26
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//27
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//28
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//29
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//30
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});
*/



//31-40

//31
app.get('/YPFHX', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//32
app.get('/KBXSV', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//33
app.get('/PDGFM', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//34
app.get('/EVGAS', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//35
app.get('/GBTJT', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//36
app.get('/EKSFG', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//37
app.get('/TKQVK', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//38
app.get('/QCKJE', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//39
app.get('/LLYRM', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//40
app.get('/QGCKN', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});




//41-50

//41
app.get('/KQXWN', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//42
app.get('/PVQZQ', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//43
app.get('/RULQW', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//44
app.get('/GHLUW', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//45
app.get('/SBKKY', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//46
app.get('/NGPCR', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//47
app.get('/FXQZU', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//48
app.get('/FCYMW', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//49
app.get('/FUMDH', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//50
app.get('/NTBBX', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});



/*
//51-60

//51
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//52
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//53
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//54
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//55
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//56
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//57
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//58
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//59
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

//60
app.get('/abc', (req, res) => {
    res.sendFile(__dirname + '/public/imgView/views' + req.url + '.jpeg');
});

*/




//+++++++++++++++++
// WRONG PASSCODES
//+++++++++++++++++


// Wrong Passcodes
app.get('/wrongpass', (req, res) => {
    res.sendFile(__dirname + '/public/wrongPass/wrongpass.html');
});
app.get('/wrongpass/favicon', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/favicon.png');
});
app.get('/wrongpass/logo', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/logo.png');
});





//+++++++++++++++++++++++
// ANSWERED SUCCESSFULLY
//+++++++++++++++++++++++


// Successful  registration of the answer
app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/public/success/successresp.html');
    //res.status(201).send("Successfully registered your answer. Feel free to change. [Score is based on the time of response]");
});
app.get('/success/favicon', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/favicon.png');
});
app.get('/success/logo', (req, res) => {
	res.sendFile(__dirname + '/public/logo-favicons/logo.png');
});


// Image responses are recorded to a file here
app.post('/respondo', (req, res) => {
    var img_response = req.body.img_response,
        hash_respose = req.body.hash_response,
        img_data = req.body.img_data;

        console.log('\n');
        console.log(' ++ [ANSWERED] [Question: ' + req.body.img_data + '] Response: [' + req.body.img_response + '] by team [HASHCODE: ' + req.body.hash_response + ']');
        console.log('\n');
        fs.appendFileSync(__dirname + '/answers/' + req.body.hash_response + '.txt', 'Response for the Question [' + req.body.img_data + '] ::  ' + req.body.img_response + '\n');

        res.redirect('/success');
});






//+++++++
// LOGIN
//+++++++


app.post('/login', (req, res) => {
    var username1 = req.body.username1,
        username2 = req.body.username2,
        id1 = req.body.id1,
        id2 = req.body.id2;

        /*
         * I know I'm doing one of the biggest foolishness in the programming world,
         * I'm fucked up!,
         * There's no way out,
         * Cloud services charge large prices.
         * setting up a DB in these busy 2 days is not possible.
         *
         * !!! Please don't edit the below code.
         */


        //1
        if (id1 = "jPjiVg" && id2 == "Bb4D" ) {
            sess = req.session;
            sess.username1 = req.body.username1;
            sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
			      console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //2
        else if (id1 = "9XJ3tm" && id2 == "eHW8") {
            sess = req.session;
            sess.username1 = req.body.username1;
            sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
			      console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //3
        else if (id1 = "FQ2qaV" && id2 == "AR2f") {
            sess = req.session;
            sess.username1 = req.body.username1;
            sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
			      console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //4
        else if (id1 = "hZVPBR" && id2 == "vbBx") {
            sess = req.session;
			      sess.username1 = req.body.username1;
			      sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //5
        else if (id1 = "AxSWC5" && id2 == "Wp7e") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //6
        else if (id1 = "KkvBzD" && id2 == "hpJd") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
			      console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //7
        else if (id1 = "PTC5fE" && id2 == "x53M") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //8
        else if (id1 = "r4szWZ" && id2 == "eGeM") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //9
        else if (id1 = "dAQKh2" && id2 == "f9Ct") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //10
        else if (id1 = "guqR3J" && id2 == "CqUM") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


        //11
        else if (id1 = "DfhZhL" && id2 == "qhVi") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //12
        else if (id1 = "PzETcP" && id2 == "VBi9") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //13
        else if (id1 = "pHiCyv" && id2 == "A6Ss") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //14
        else if (id1 = "dVrog6" && id2 == "rXjh") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //15
        else if (id1 = "S6KFiR" && id2 == "WUaX") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //16
        else if (id1 = "nxhdsc" && id2 == "7ge3") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //17
        else if (id1 = "YQULnF" && id2 == "3Ld3") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //18
        else if (id1 = "SMu5iv" && id2 == "UWSr") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //19
        else if (id1 = "gJYK6Y" && id2 == "fo5D") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //20
        else if (id1 = "xN38Qf" && id2 == "TWv5") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


        //21
        else if (id1 = "CUCLvx" && id2 == "Bb4D") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //22
        else if (id1 = "aRnqmz" && id2 == "Aofg") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //23
        else if (id1 = "LTxzSn" && id2 == "4uCu") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //24
        else if (id1 = "PiXGxb" && id2 == "Qvgg") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //25
        else if (id1 = "tEyP54" && id2 == "o3nQ") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //26
        else if (id1 = "zksWz9" && id2 == "dTA4") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //27
        else if (id1 = "WhtjuX" && id2 == "6Zrt") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //28
        else if (id1 = "uJpaHF" && id2 == "QARx") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //29
        else if (id1 = "V7mdKP" && id2 == "nyoH") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }


         //30
        else if (id1 = "6a4Y5F" && id2 == "yYXp") {
            sess = req.session;
      			sess.username1 = req.body.username1;
      			sess.username2 = req.body.username2;
            sess.id1 = req.body.id1;
            sess.id2 = req.body.id2;
            console.log('\n\n ++ User [' + sess.username1 + '] & [' + sess.username2 + '] [LOGGED IN]');
            res.redirect('/dashboard');
        }
        else {
        	res.redirect('/wrongpass');
        }
});



//++++++++++
// DASHBOARD
//++++++++++



// route for user's dashboard
// create a file with HASHCODE and Contestestants names
app.get('/dashboard', (req, res) => {
    sess = req.session;


    if (sess.id1 && sess.id2) {
        var HASHCODE = randomstring.generate({
            length: 4,
            charset: 'alphanumeric'
    });

    var WELCOMEMSG = sess.username1 + ' and ' + sess.username2;

        // Time taken by the team
        //var YOURTIME = sess.stopwatch.elapsed.minutes;
        //console.log("REMAINTIME of " + sess.username1 + ': ' + YOURTIME);


        res.render(__dirname + '/public/dashboard/dashboard.ejs', {
            HASHCODE: HASHCODE,
            WELCOMEMSG: WELCOMEMSG
            //YOURTIME: YOURTIME
        });

        console.log('\n ++ [HASHCODE] for team [[' + sess.username1 + ']]  and  [[' + sess.username2 + ']] is [' +  HASHCODE + ']...');
        console.log(' ++ Team [HASHCODE: ' + HASHCODE + '] [['+ sess.username1 + ']]  and  [[' + sess.username2 + ']] has successfully [REGISTERED]...');
        console.log(' ++ Responses for team [HASHCODE: ' + HASHCODE + '] [['  + sess.username1 +  ']]  and  [[' + sess.username2 + ']] [STARTED] [RECORDING]..');

        // Recording new loging with their codes
        fs.appendFileSync(__dirname + '/hashes/'+ 'HASHES' + '.txt', 'Team [' + sess.username1  + '] [' + sess.username2  +  '] [HASHCODE]: [' + HASHCODE + ']\n' );
        console.log(' ++ Team [HASHCODE: ' + HASHCODE + '] [['+ sess.username1 + ']]  and  [[' + sess.username2 + ']] has successfully [REGISTERED]... [FILE CREATED]...');
        console.log('\n');
    }
    else {
        res.redirect('/login');
    }
});


// route for user logout
app.get('/logout', (req, res) => {

    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Session distroyed");
            res.redirect('/');
        }
    });
});



// route for handling 404 requests(unavailable routes) and route handling for images and respponse URLs
app.use(function (req, res, next) {
   res.status(404).sendFile(__dirname + '/public/error/404error.html');
});


// start the express server
app.listen(app.get('port'), () => console.log(`App started on port ${app.get('port')}`));
