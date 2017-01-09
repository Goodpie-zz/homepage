const SHIFT = 16;
const RETURN = 13;
const ALT = 18;

var keyCombination = {
    "return":false,
    "shift":false,
    "alt":false
};

document.onkeydown = function(e)
{
    e  = e || window.event;
    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = true;
    }
    else if (keycode === ALT)
    {
        keyCombination["alt"] = true;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = true;
        search();
    }


};

// On key up resets the status of the key combination
document.onkeyup = function(e)
{
    e = e || window.event;

    var keycode = e.keyCode;

    if (keycode === SHIFT)
    {
        keyCombination["shift"] = false;
    }
    else if (keycode === ALT)
    {
        keyCombination["alt"] = false;
    }
    else if (keycode === RETURN)
    {
        keyCombination["return"] = false;
    }

};

var search = function()
{
    // Get the search query
    var query = document.getElementById("search").value;

    // Make sure query isn't empty to avoid accidental presses
    if (query != "") {
        var url = "https://www.google.com.au/#q=" + query;

        // Depending on the key combinations search google or duck duck go
        if (keyCombination["shift"] === true && keyCombination["alt"] === false) {
            url = "https://duckduckgo.com/?q=" + query;
        }
        else if (keyCombination["alt"] === true && keyCombination["shift"] === false) {
            url = "https://reddit.com/search?q=" + encodeURIComponent(query);
        }

        // Open URL in the current tab
        window.open(url, "_self");
    }
};