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

    // Olá desenvolvedor, estou muito grato de você estar cheretando por aqui :)
    // Caso tenha alguma dúvida sobre mim ou queira conversar sobre algo
    // se sinta livre para me mandar um email.