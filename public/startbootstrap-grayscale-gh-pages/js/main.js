const intro = introJs();
intro.setOptions({
    steps: [
        {
            element:'#step1',
            intro: 'Bienvenido a este tour por la página'
        },
        {
            element:'#step2',
            intro: 'Aquí encontrarás las últimas noticias de videojuegos'
        },
        {
            element:'#step3',
            intro: 'Aquí podrás ver un amplio catálogo de videojuegos'
        },
        {
            element: '#step4',
            intro: 'Aquí puedes buscar el videojuego de tu preferencia'
        },
        {
            element:'#step5',
            intro: 'Información sobre el equipo desarrollador'
        },
        {
            element: '#step6',
            intro: 'Envíanos tus mensajes o sugerencias'
        }
    ]
})
intro.start();