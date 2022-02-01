<script type="text/javascript">
    $(function () {

        // Initialize Variables
        const socket = io();

        const $form  = document.getElementById('signup');
         const $messages = $('#messages');

        $form.addEventListener('submit', (event) => {
            console.log('form submitted');
         });

        // Socket.io listeners
        socket.on('new message', (msg) => {
            displayMessage(msg);
        });

        socket.on('close', () => {
            displayMessage('Lost connection to device.');
        });

        // Functions
        function sendData(data) {
            socket.send(data);
        }

        function displayMessage(msg) {
            $messages.append($('<li>').text(msg));
        }
    });
</script>