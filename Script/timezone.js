let options = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

    setInterval(
        () => {
            document.querySelector("#time").innerText = formatter.format(new Date());
        }
    , 1000)