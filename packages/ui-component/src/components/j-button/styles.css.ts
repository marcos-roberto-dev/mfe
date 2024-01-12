import ds from '@repo/tokens';

import { RecipeVariants, recipe } from '@vanilla-extract/recipes';
export const JButtonStyle = recipe({
  base: {
    'padding': '8px 16px',
    'border': 'none',
    'borderRadius': '4px',
    'width': '100%',
    'height': '100%',
    'cursor': 'pointer',

    ':hover': {
      opacity: 0.9,
    },
  },

  variants: {
    variant: {
      primary: {
        background: ds.tokens.colors.primary,
        color: ds.tokens.colors.text_primary,
      },
      secondary: {
        background: ds.tokens.colors.secondary,
        color: ds.tokens.colors.text_primary,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export type JButtonVariants = RecipeVariants<typeof JButtonStyle>;
