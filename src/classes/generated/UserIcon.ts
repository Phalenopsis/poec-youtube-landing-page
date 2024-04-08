import { DivGenerator } from "./../generator/DivGenerator.js";

export class UserIcon {
    private _node: HTMLElement;
    public constructor(content: string, color: string, backgroundColor: string) {
        this._node = this.getUserIcon();
        this._node.innerText = content[0];
        this._node.style.color = color;
        this._node.style.backgroundColor = backgroundColor;
    }

    private getUserIcon(): HTMLElement {
        const userIcon = DivGenerator.generate(["user-icon", "centered"]);
        return userIcon;
    }
    public get node(): HTMLElement {
        return this._node;
    }
}