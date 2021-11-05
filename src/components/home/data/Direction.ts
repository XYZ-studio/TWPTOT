
export const Direction = {
  0: '南下',
  1: '北上',
};

export type DirectionListType = keyof typeof Direction | 'all';

export const DirectionList: Array<DirectionListType> = [
  0,
  1,
];
