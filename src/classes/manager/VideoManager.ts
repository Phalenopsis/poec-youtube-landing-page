import { VideoInformationInterface } from "../dataType/VideoInformationInterface";

type VideoInformationList = VideoInformationInterface[];

export class VideoManager {
    private _videoInformations: VideoInformationList;
    private static api: string = "./../assets/source/video-data-small.json";
    private constructor(videoInformations: VideoInformationList) {
        this._videoInformations = videoInformations;
    }

    public static async build(): Promise<VideoManager> {
        const data = await fetch(this.api);
        const videoInfomationsJson = await data.json();
        return new VideoManager(videoInfomationsJson);
    }

    get videoInformations(): VideoInformationList {
        return this._videoInformations;
    }


} 