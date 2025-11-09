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
            output.innerHTML += `<div>Commands: help, clear, exit</div>`;
        break;
        case 'clear':
            output.innerHTML = '';
        break;
        case 'exit':
            output.innerHTML += `<div>Exiting terminal mode...</div>`;
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1000);
        break;
        default:
            output.innerHTML += `<div>Unknown command. Type 'help' for a list.</div>`;
        break;
    }
}