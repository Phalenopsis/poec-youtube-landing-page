import { VideoInformationList } from "./../dataType/VideoInformationList";

export class VideoManager {
    #videoInformations: VideoInformationList;
    private static api: string = "./../assets/source/video-data-small.json";

    private constructor(videoInformations: VideoInformationList) {
        this.#videoInformations = videoInformations;
    }

    public static async build(): Promise<VideoManager> {
        const data = await fetch(this.api);
        const videoInfomationsJson = await data.json();
        return new VideoManager(videoInfomationsJson);
    }

    get videoInformations(): VideoInformationList {
        return this.#videoInformations;
    }
} 