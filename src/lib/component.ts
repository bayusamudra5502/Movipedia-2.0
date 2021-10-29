interface ComponentConstructor {
  new (...params: any): Component;
}

interface IComponent {
  connectedCallback(): void;
  adoptedCallback(): void;
  disconnectedCallback?(): void;
  attributeChangedCallback?(
    name: string,
    oldValue: string,
    newValue: string
  ): void;
}

abstract class Component extends HTMLElement implements IComponent {
  abstract render(): void;

  connectedCallback() {
    this.render();
  }

  adoptedCallback() {
    this.render();
  }
}

export function register(tagname: string) {
  return function (constructor: ComponentConstructor) {
    customElements.define(tagname, constructor);
  };
}

export default Component;
