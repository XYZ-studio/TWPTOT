
export const City = {
  KEE: '基隆市',
  NWT: '新北市',
  TPE: '臺北市',
  TAO: '桃園市',
  HSQ: '新竹縣',
  HSZ: '新竹市',
  MIA: '苗栗縣',
  TXG: '臺中市',
  CHA: '彰化縣',
  NAN: '南投縣',
  YUN: '雲林縣',
  CYQ: '嘉義縣',
  CYI: '嘉義市',
  TNN: '臺南市',
  KHH: '高雄市',
  PIF: '屏東縣',
  TTT: '臺東縣',
  HUA: '花蓮縣',
  ILA: '宜蘭縣',
};

export type CityListType = keyof typeof City;

export const CityList: Array<CityListType> = [
  'KEE',
  'NWT',
  'TPE',
  'TAO',
  'HSQ',
  'HSZ',
  'MIA',
  'TXG',
  'CHA',
  'NAN',
  'YUN',
  'CYQ',
  'CYI',
  'TNN',
  'KHH',
  'PIF',
  'TTT',
  'HUA',
  'ILA',
];