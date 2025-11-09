const output = document.getElementById('output');
const input = document.getElementById('commandInput');

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = input.value.trim();
        output.innerHTML += `<div>$ ${command}</div>`;
        processCommand(command);
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function processCommand(cmd) {
    switch (cmd.toLowerCase()) {
        case 'help':
            output.innerHTML += `<div>Commands: help, blog, contact, project, clear, developer, exit</div>`;
        break;
        case 'clear':
            output.innerHTML = '';
        break;
        case 'exit':
            output.innerHTML += `<div>Exiting terminal mode...</div>`;
            setTimeout(() => {
                window.location.href = '/index.html';
            }, 1000);
        break;
        case 'blog':
            output.innerHTML += `<div>avalible blogs: 1182025</div>`;
        break;
        case 'blog 1182025':
            output.innerHTML += `<div>decided to participate in the https://page.hackclub.com/ program, so I build a personal site. 
                This is that site!
                its my first time making a website in any situation, so there was a LOT of pulling code from W3Schools, etc. but I did ultimatly make my own thing.
                next time ill do an actual blog but this one is more of a test of div2 so...</div>`;
        break;
        case 'contact':
            output.innerHTML += `<div>will.kuntze@gmail.com</div>`;
        break;
        case 'project':
            output.innerHTML += `<div>avalible projects: daydream, 555</div>`;
        break;
        case 'project daydream':
            output.innerHTML += `<div>this was a game I made in 25 hours for Daydream Ottawa with 2 of my friends. all the source code is on github, and is playable on itch</div>`;
        break;
        case 'project 555':
            output.innerHTML += `<div>a simple 555 chaser board I made for hackclub Blueprint because Ive never designed PCBs before and I wanteda soldering iron. More details can be seen on the blueprint journal</div>`;
        break;
        case 'developer':
            output.innerHTML += `<div>Exiting terminal mode...</div>`;
            setTimeout(() => {
                window.location.href = `/developer.html`;
            }, 1000);
        break;
        default:
            output.innerHTML += `<div>Unknown command. Type 'help' for a list.</div>`;
        break;
    }
}