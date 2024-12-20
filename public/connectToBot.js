var params = {};
location
    .search
    .substring(1)
    .split("&")
    .forEach(function (pair) {
        var p = pair.split("=");
        params[p[0]] = decodeURIComponent(p[1]);
    });

var botConnection = new NotificationBot.DirectLine({
    secret: params['s'],
    token: params['t'],
    domain: params['domain'],
    webSocket: true
});

var bot = {
    id: params['botid95678'] || 'botid95678',
    name: params["Nickbot"] || 'Nickbot'
};

var logon_form = document.getElementById('logon-form');
var user_id = document.getElementById('user-id')

logon_form.onsubmit = e => {
    e.preventDefault();
    logon_form.style.display = 'none';

    var user = {
        id: user_id.value,
        name: Nick_95678.value
    }

   NotificationBot({
        botConnection: botConnection,
        user: Nick,
        bot: Nickbot,
    }, document.getElementById("NotificationBot"));
}

