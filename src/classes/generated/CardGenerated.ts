import { VideoInformationInterface } from "../dataType/VideoInformationInterface.js";
import { AbstractElementGenerated } from "./AbstractElementGenerated.js";
import { DivGenerator } from "./../generator/DivGenerator.js";
import { ImgGenerator } from "../generator/ImgGenerator.js";
import { UserIcon } from "./UserIcon.js";
import { TitleGenerator } from "./../generator/TitleGenerator.js";
import { SpanGenerator } from "./../generator/SpanGenerator.js";
import { Converter } from "../service/Converter.js"

export class CardGenerated extends AbstractElementGenerated {
    private videoDesc: VideoInformationInterface;
    public constructor(node: HTMLElement, videoDesc: VideoInformationInterface) {
        super(node);
        this.videoDesc = videoDesc;
        this.constructCard();
    }

    private constructCard() {
        this.node.appendChild(this.getImageContainer());
        this.node.appendChild(this.getCardBody());
    }

    private getImageContainer(): HTMLElement {
        const imgContainer = DivGenerator.generate(['img-container']);
        const img = ImgGenerator.generate(['card-img'], null, this.videoDesc.img);
        imgContainer.appendChild(img);
        return imgContainer;
    }

    private getCardBody(): HTMLElement {
        const cardBody = DivGenerator.generate(['card-body']);
        // authorIcon
        const authorIcon = new UserIcon(this.videoDesc.author, "green", "yellow");
        cardBody.appendChild(authorIcon.node);
        cardBody.appendChild(this.getCardInformation());
        return cardBody;
    }

    private getCardInformation(): HTMLElement {
        const cardInformationsElt = DivGenerator.generate(["card-informations"]);
        const titleElt = TitleGenerator.generate(2, this.videoDesc.title);
        const authorElt = TitleGenerator.generate(3, this.videoDesc.author);
        cardInformationsElt.appendChild(titleElt);
        cardInformationsElt.appendChild(authorElt);
        cardInformationsElt.appendChild(this.getViewsElt());
        cardInformationsElt.appendChild(this.getPostedSince());
        return cardInformationsElt;
    }

    private getViewsElt(): HTMLElement {
        const viewsNumber: string = Converter.convertNumberToSymbol(this.videoDesc.views);
        const viewsContent: string = viewsNumber + " vues";
        const viewsElt: HTMLElement = SpanGenerator.generate(["views"], null, viewsContent);
        return viewsElt;
    }

    private getPostedSince(): HTMLElement {
        const postedSince: string = Converter.convertDateStringToTimeElapsed(this.videoDesc.posted);
        const postedSinceContent: string = "il y a " + postedSince;
        const postedSinceElt: HTMLElement = SpanGenerator.generate(["posted-since"], null, postedSinceContent);
        return postedSinceElt;
    }
}