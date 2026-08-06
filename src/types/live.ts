export type LiveData = {
  status:
    | "offline"
    | "starting"
    | "live";

  videoId?: string;

};