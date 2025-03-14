import { connect } from "socket.io-client";

const socket = connect("http://localhost:5000", {
  withCredentials: true,
});

export default socket;
