import io from "socket.io-client";
import { BACKEND_URL } from "../config/env";
export default io(BACKEND_URL, { autoConnect: false });
