import { useContext } from "react";
import { QueueContext } from "../context/queue_context";

export function useQueue() {
  return useContext(QueueContext);
}
