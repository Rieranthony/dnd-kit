import type {ClientRect} from '@dnd-kit-orchestra/core';
import type {Transform} from '@dnd-kit-orchestra/utilities';

export type SortingStrategy = (args: {
  activeNodeRect: ClientRect | null;
  activeIndex: number;
  index: number;
  rects: ClientRect[];
  overIndex: number;
}) => Transform | null;
