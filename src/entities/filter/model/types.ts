export enum FILTER_STATE {
  ALL = 'all',
  COMPLETED = 'completed',
  ACTIVE = 'active',
}

export type FilterStateType = {
  filter: FILTER_STATE;
  updateFilter: (filter: FILTER_STATE) => void;
};
