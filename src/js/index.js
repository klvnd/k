/* 
NOTES:
to make this asynchronous test work, you need to change parameters in the HTML file. 
take a look at click listener on the button, you will see "babypack".
change it to "starterpack". 
done!
*/

console.log('javascript ready...')

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
  var navbar = document.getElementById("navbar");
  navbar.className === "navbar" ? navbar.className += " responsive" : navbar.className = "navbar"
}

const notification = (pack) => {
    return ("Sorry, the CV is not available. Please contact Kelvin to request the CV. Click OK to continue.")
    
}

//! asynchronous trigger for notification bell
async function showPopup(params) {
    try {
        const popup = await notification(params);
        alert(popup)
    } catch (err) {
        alert(err)
    }
}


