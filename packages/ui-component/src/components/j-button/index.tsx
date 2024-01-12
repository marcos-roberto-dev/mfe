import { Component, Prop, h } from '@stencil/core';
import { JButtonStyle, JButtonVariants } from './styles.css';

@Component({
  tag: 'j-button',
  styleUrls: ['styles.css.ts'],
  scoped: true,
})
export class JButton {
  name = 'JButton';
  @Prop() label?: string = 'Example';
  @Prop() variants?: JButtonVariants;

  render() {
    return (
      <button class={JButtonStyle({ variant: this.variants?.variant })}>
        <slot>{this.label}</slot>
      </button>
    );
  }
}
