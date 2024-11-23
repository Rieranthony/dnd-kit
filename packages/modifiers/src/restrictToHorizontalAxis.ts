import type {Modifier} from '@dnd-kit-orchestra/core';

export const restrictToHorizontalAxis: Modifier = ({transform}) => {
  return {
    ...transform,
    y: 0,
  };
};
