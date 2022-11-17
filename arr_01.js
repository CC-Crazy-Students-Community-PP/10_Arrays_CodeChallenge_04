/*********   Code Challange 04 Arrays push() / pop()  **********/

/*
    Aufgabe:
        <html><head></head><body><h1></h1><p></p></body></html>
        ---->
        <html>
            <head>
            </head>
            <body>
                <h1>
                </h1>
                <p>
                </p>
            </body>
        </html>

        --> return : "\n"  
        --> Tab: "\t"

        Verwenden Sie dafür die untenstehenden Arrays
*/

/********************************************************/
/*******                Example 01                *******/
/********************************************************/

    // Modul: globale Variablen
    const cobj = { 
        open_o: "<", 
        close_o: "</", 
        close: ">" 
    }
    const newLine = "\n";
    const controls = [ "<", "</", ">" ];
    const tags = [ 
        "html", "head", "head", "body",
        "h1", "h1",
        "p", "p",
        "ul", "li", "li", "li", "li", "li", "li", "ul",
        "p", "p",
        "body", "html"
    ];

    let stack = [];

// Modul: HTML-Synthese | Test
    output( getHTML() );
    function getHTML() {
        let htmlStr = "", op = "", count = 0;

        for ( let i = 0; i < tags.length; i ++ ) {
            // if(false) {
            if ( isOpenElement( tags[ i ] ) ) { 
                count = stack.length - 1; 
                op = "open";
            } else {
                count = stack.length; 
                op = "close";
            }
            htmlStr += getTabs( count ) + getElement( tags[i], op) + newLine;
        }

        return htmlStr;
    }

    // output( isOpenElement( "head" ) );
    // output( isOpenElement( "body" ) );
    // output( isOpenElement( "body" ) );
    // output( isOpenElement( "head" ) );
    function isOpenElement( tag ) {
        let cond = ( tag != stack[ stack.length - 1 ] );    // tag liegt nicht oben! --> neu, open
        
        if ( cond ) {                                       // open
            stack.push( tag );
            // output( stack );                               // zeigt die Struktur in der Konsole
            return true;
        } else {                                            // close
            stack.pop();
            // output( stack );                               // zeigt die Struktur in der Konsole
            return false;
        }
        
    }

// Modul: Zusammenbau der Elements: <tagStr> --> Tests:
    // output(getElement(tags[1],"open"));
    // output(getElement(tags[1],"close"));
    // output(getElement(tags[1]));
    function getElement( tag, op ) {
        switch ( op ) {
            case "open": 
                // return controls[ 0 ] + tag + controls[ 2 ];
                return cobj.open_o + tag + cobj.close;
            case "close":
                // return controls[ 1 ] + tag + controls[ 2 ];
                return cobj.close_o + tag + cobj.close;
            default:
            return "#!?";
        }
    }

// Modul: Erstellen der Tabulatoren (1..n)
    function getTabs( count ) {
        let tabs ="";
        for ( let i = 0; i < count; i ++ ) {        // zählt die tabs
            tabs += "\t";                           // kombiniert alle tabs aus
        }
        return tabs;
    }

/********************************************************/
/*******                  Output                  *******/
/********************************************************/
// output
// output( "Test" );
function output( outputStr ) { console.log( outputStr ); }