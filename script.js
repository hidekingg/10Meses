function openEnvelope() {
    // Dispara la música inmediatamente con la interacción del usuario
    const music = document.getElementById('bg-music');
    music.play().catch(error => console.log("El navegador bloqueó el audio", error));

    document.getElementById('flap').classList.add('open-flap');
    document.getElementById('letter').classList.add('pull-letter');
    document.getElementById('instruction').style.opacity = '0';

    setTimeout(() => {
        const introScreen = document.getElementById('intro-screen');
        const mainContent = document.getElementById('main-content');
        introScreen.style.opacity = '0'; 

        setTimeout(() => {
            introScreen.style.display = 'none'; 
            mainContent.style.display = 'flex'; 
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 50);
        }, 800);
    }, 1800); 
}

function revealSecret() {
    const msg = document.getElementById('secret-message');
    msg.style.display = msg.style.display === 'block' ? 'none' : 'block';
}