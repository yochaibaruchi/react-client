import { io } from "socket.io-client";
let socket = io.connect('http://127.0.0.1:8181');
socket.emit('auth', 'uiAuthKey')
export default socket