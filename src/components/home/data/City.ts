
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

export type CityListType = keyof typeof City | 'all';

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

export const citys = {
  'Taipei': '臺北市',
  'NewTaipei': '新北市',
  'Taoyuan': '桃園市',
  'Taichung': '臺中市',
  'Tainan': '臺南市',
  'Kaohsiung': '高雄市',
  'Keelung': '基隆市',
  'Hsinchu': '新竹市',
  'HsinchuCounty': '新竹縣',
  'MiaoliCounty': '苗栗縣',
  'ChanghuaCounty': '彰化縣',
  'NantouCounty': '南投縣',
  'YunlinCounty': '雲林縣',
  'ChiayiCounty': '嘉義縣',
  'Chiayi': '嘉義市',
  'PingtungCounty': '屏東縣',
  'YilanCounty': '宜蘭縣',
  'HualienCounty': '花蓮縣',
  'TaitungCounty': '臺東縣',
  'KinmenCounty': '金門縣',
  'PenghuCounty': '澎湖縣',
  'LienchiangCounty': '連江縣',
};
