'use strict';

// GET THE TYPE OF DEVICE THE PERSON IS LOADING THE WEBSITE ON
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

if( deviceType() === "desktop" )
{
    document.querySelector('link').href = 'main.css';
}
else
{
    document.querySelector('link').href = 'mobile.css';
}