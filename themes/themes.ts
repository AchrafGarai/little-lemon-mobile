type Theme = {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  color6: string;
  color7: string;
  color8: string;
  color9: string;
  color10: string;
  color11: string;
  color12: string;
  background: string;
  backgroundHover: string;
  backgroundPress: string;
  backgroundFocus: string;
  backgroundStrong: string;
  backgroundTransparent: string;
  color: string;
  colorHover: string;
  colorPress: string;
  colorFocus: string;
  colorTransparent: string;
  borderColor: string;
  borderColorHover: string;
  borderColorFocus: string;
  borderColorPress: string;
  placeholderColor: string;

}

function t(a) {
  let res: Record<string, string> = {}
  for (const [ki, vi] of a) {
    // @ts-ignore
    res[ks[ki]] = vs[vi]
  }
  return res
}
const vs = [
  '#fff',
  '#f8f8f8',
  'hsl(0, 0%, 96.3%)',
  'hsl(0, 0%, 94.1%)',
  'hsl(0, 0%, 92.0%)',
  'hsl(0, 0%, 90.0%)',
  'hsl(0, 0%, 88.5%)',
  'hsl(0, 0%, 81.0%)',
  'hsl(0, 0%, 56.1%)',
  'hsl(0, 0%, 50.3%)',
  'hsl(0, 0%, 42.5%)',
  'hsl(0, 0%, 9.0%)',
  'rgba(255,255,255,0)',
  'rgba(10,10,10,0)',
  '#050505',
  '#151515',
  '#191919',
  '#232323',
  '#282828',
  '#323232',
  '#424242',
  '#494949',
  '#545454',
  '#626262',
  '#a5a5a5',
]

const ks = [
'color1',
'color2',
'color3',
'color4',
'color5',
'color6',
'color7',
'color8',
'color9',
'color10',
'color11',
'color12',
'background',
'backgroundHover',
'backgroundPress',
'backgroundFocus',
'backgroundStrong',
'backgroundTransparent',
'color',
'colorHover',
'colorPress',
'colorFocus',
'colorTransparent',
'borderColor',
'borderColorHover',
'borderColorFocus',
'borderColorPress',
'placeholderColor']


const n1 = t([[0, 0],[1, 1],[2, 2],[3, 3],[4, 4],[5, 5],[6, 6],[7, 7],[8, 8],[9, 9],[10, 10],[11, 11],[12, 1],[13, 2],[14, 3],[15, 4],[16, 0],[17, 12],[18, 11],[19, 10],[20, 11],[21, 10],[22, 13],[23, 4],[24, 5],[25, 3],[26, 4],[27, 8]]) as Theme

export const light = n1 as Theme
const n2 = t([[0, 14],[1, 15],[2, 16],[3, 17],[4, 18],[5, 19],[6, 20],[7, 21],[8, 22],[9, 23],[10, 24],[11, 0],[12, 15],[13, 16],[14, 17],[15, 18],[16, 14],[17, 13],[18, 0],[19, 24],[20, 0],[21, 24],[22, 12],[23, 18],[24, 19],[25, 17],[26, 18],[27, 22]]) as Theme

export const dark = n2 as Theme
const n3 = t([[0, 1],[1, 2],[2, 3],[3, 4],[4, 5],[5, 6],[6, 7],[7, 8],[8, 9],[9, 10],[10, 11],[11, 13],[12, 2],[13, 3],[14, 4],[15, 5],[16, 1],[17, 0],[18, 10],[19, 9],[20, 10],[21, 9],[22, 11],[23, 5],[24, 6],[25, 4],[26, 5],[27, 7]]) as Theme

export const light_subtle = n3 as Theme
const n4 = t([[0, 15],[1, 16],[2, 17],[3, 18],[4, 19],[5, 20],[6, 21],[7, 22],[8, 23],[9, 24],[10, 0],[11, 12],[12, 16],[13, 17],[14, 18],[15, 19],[16, 15],[17, 14],[18, 24],[19, 23],[20, 24],[21, 23],[22, 0],[23, 19],[24, 20],[25, 18],[26, 19],[27, 21]]) as Theme

export const dark_subtle = n4 as Theme