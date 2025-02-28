import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('name-tag')
export class NameTag extends LitElement {
    @property()
    name: string = 'Your name here'

    changeName(event: Event) {
        const input = event.target as HTMLInputElement
        this.name = input.value
    }

    render() {
        return html`
            <p>Hello, ${this.name}</p>
            <input ?disabled=${!this.checked} @input=${this.changeName} placeholder="Enter your name...">
        `
    }
}