export interface TabItem {
  id: string;
  rowIndex: number;
  bar: number;
  tick: number;
  stringIndex: number;
  kind: 'fret' | 'mute';
  fret?: number;
}
src/utils/coords.ts
