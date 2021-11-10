export const Train = {
  '1': '太魯閣',
  '2': '普悠瑪',
  '3': '自強',
  '4': '莒光',
  '5': '復興',
  '6': '區間',
  '7': '普快',
  '10': '區間快'};

export type TrainNameList = keyof typeof Train | 'all';

export const TrainList: Array<TrainNameList> = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '10',
];

export const TrainName = [
  '太魯閣',
  '普悠瑪',
  '自強',
  '莒光',
  '復興',
  '普快',
  '區間快',
];
