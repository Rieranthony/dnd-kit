import type {UniqueIdentifier} from '@dnd-kit-orchestra/core';

export type SortableData = {
  sortable: {
    containerId: UniqueIdentifier;
    items: UniqueIdentifier[];
    index: number;
  };
};
