import { VideoInformation } from "../dataType/VideoInformation.js";
import { ArticleGenerator } from "./../generator/ArticleGenerator.js";
import { DivGenerator } from "./../generator/DivGenerator.js";
import { ImgGenerator } from "../generator/ImgGenerator.js";
import { UserIcon } from "./UserIcon.js";
import { TitleGenerator } from "./../generator/TitleGenerator.js";
import { SpanGenerator } from "./../generator/SpanGenerator.js";
import { Converter } from "../service/Converter.js"

export class CardGenerated {
    public node: HTMLElement;
    private videoDesc: VideoInformation;
    public constructor(videoDesc: VideoInformation) {
        this.node = ArticleGenerator.generate(["card-container"]);
        this.videoDesc = videoDesc;
        this.constructCard();
    }

    private constructCard() {
        this.node.appendChild(this.getImageContainer());
        this.node.appendChild(this.getCardBodyElement());
    }

    private getImageContainer(): HTMLElement {
        const imgContainer: HTMLElement = DivGenerator.generate(['img-container']);
        const img: HTMLElement = ImgGenerator.generate(['card-img'], null, this.videoDesc.img);
        imgContainer.appendChild(img);
        return imgContainer;
    }

    private getCardBodyElement(): HTMLElement {
        const cardBody: HTMLElement = DivGenerator.generate(['card-body']);
        // authorIcon
        const authorIcon: UserIcon = new UserIcon(this.videoDesc.author, "green", "yellow");
        cardBody.appendChild(authorIcon.node);
        cardBody.appendChild(this.getCardInformationElements());
        return cardBody;
    }

    private getCardInformationElements(): HTMLElement {
        const cardInformationsElt: HTMLElement = DivGenerator.generate(["card-informations"]);
        const titleElt: HTMLElement = TitleGenerator.generate(2, this.videoDesc.title);
        const authorElt: HTMLElement = TitleGenerator.generate(3, this.videoDesc.author);
        cardInformationsElt.appendChild(titleElt);
        cardInformationsElt.appendChild(authorElt);
        cardInformationsElt.appendChild(this.getViewsElement());
        cardInformationsElt.appendChild(this.getPostedSinceElement());
        return cardInformationsElt;
    }

    private getViewsElement(): HTMLElement {
        const viewsNumber: string = Converter.convertNumberToSymbol(this.videoDesc.views);
        const viewsContent: string = viewsNumber + " vues";
        const viewsElt: HTMLElement = SpanGenerator.generate(["views"], null, viewsContent);
        return viewsElt;
    }

    private getPostedSinceElement(): HTMLElement {
        const postedSince: string = Converter.convertDateStringToTimeElapsed(this.videoDesc.posted);
        const postedSinceContent: string = "il y a " + postedSince;
        const postedSinceElt: HTMLElement = SpanGenerator.generate(["posted-since"], null, postedSinceContent);
        return postedSinceElt;
    }

    public getCategorie() {
        return this.videoDesc.categories;
    }

}