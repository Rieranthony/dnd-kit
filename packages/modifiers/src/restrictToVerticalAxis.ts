import type {Modifier} from '@dnd-kit-orchestra/core';

export const restrictToVerticalAxis: Modifier = ({transform}) => {
  return {
    ...transform,
    x: 0,
  };
};
