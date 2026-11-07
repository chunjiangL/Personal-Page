// The warm daylight wash supplies the warmth; the slabs themselves are ordinary
// neutral concrete. Both initial construction and weather use this same palette.
export function adaptPavementPaletteSource(source){
 const replacements=[
  ["pavement:'#c8bca4',curb:'#bcb6a4'","pavement:'#b4b9bd',curb:'#a4aaae'"],
  ["pavement:'#b5b7a8',curb:'#adb3a6'","pavement:'#9da6ad',curb:'#959fa6'"],
 ];
 for(const [before,after]of replacements){
  if(source.split(before).length!==2)throw Error('Original pavement weather palette changed');
  source=source.replace(before,after);
 }
 return source;
}
