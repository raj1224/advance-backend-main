import {io} from "socket.io-client";

export function connectWs(){
    return io("http://localhost:4000");
}