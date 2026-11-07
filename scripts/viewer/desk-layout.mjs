// Travel in the authored bedroom axes (metres). A connector comes out along
// its mating axis; repeated fasteners and keys keep their original pattern.
const layer=(y,z=0,x=0)=>[x,y,z];

function monitor(name,x) {
  if(name.startsWith('foot_'))return layer(-.145,.17,.085);
  if(name==='base_casting')return layer(-.085,.17,.085);
  if(name.startsWith('base_'))return layer(name.endsWith('shank')?-.115:-.16,.17,.085);
  if(name==='swept_stand_column')return layer(-.025,.295,.085);
  if(name.startsWith('pivot_'))return layer(.04,.295,.085+(name.endsWith('left')?.06:name.endsWith('right')?-.06:.03));
  if(name==='front_bezel')return layer(.055,-.26);
  if(name==='display_surface')return layer(.055,-.145);
  if(name==='internal_display_pack')return layer(.055,-.032);
  if(name==='sculpted_rear_shell')return layer(.055,.084);
  if(name==='rear_mount_saddle'||name==='tilt_barrel')return layer(.055,name==='tilt_barrel'?.216:.168);
  if(name.startsWith('mount_screw'))return layer(.055,.28);
  if(name==='power_indicator'||name==='osd_joystick')return layer(.025,-.22,x*.08);
  if(name==='io_well')return layer(.01,.133);
  return layer(-.01,name.endsWith('socket')?.222:name.includes('contact')?.28:.177,x*.14);
}

function keyboard(name,x,z) {
  if(/^(keycap_|homing_)/.test(name))return layer(.131,z*.32,x*.16);
  if(name.startsWith('stem_'))return layer(.089,z*.22,x*.11);
  if(name==='continuous_top_frame')return layer(.059);
  if(name.startsWith('switch_'))return layer(.031,z*.09,x*.045);
  if(name.startsWith('stabilizer_'))return layer(.021);
  if(name==='perforated_switch_plate')return layer(0);
  if(name.startsWith('underside_screw_'))return layer(-.084);
  if(name.startsWith('pad_')||name==='underside_label')return layer(-.064);
  if(name.startsWith('usb_c_'))return layer(-.032,name.endsWith('tongue')?.035:.018);
  return layer(-.037);
}

function mouse(name,x) {
  if(name==='moulded_lower_housing')return layer(0);
  if(name==='palm_upper_shell')return layer(.050,-.024);
  if(name.endsWith('click_panel'))return layer(.051,.018,Math.sign(x)*.012);
  if(name==='ribbed_scroll_tyre')return layer(.033,.007);
  if(name==='scroll_axle')return layer(.033,.007,.032);
  if(name.endsWith('axle_cradle'))return layer(.014,0,Math.sign(x)*.012);
  if(name.includes('battery'))return layer(name.endsWith('grip')?-.049:-.031,-.013);
  if(name.endsWith('screw'))return layer(-.042);
  if(name==='underside_power_switch')return layer(-.034,0,-.009);
  return layer(-.016);
}

function mini(name,x,z) {
  if(name==='rounded_alloy_unibody')return layer(.064);
  if(name==='bottom_service_cover')return layer(-.018);
  if(name==='silicone_foot_ring')return layer(-.040);
  if(name.startsWith('cover_screw'))return layer(-.060);
  if(name==='underside_power_button')return layer(-.032,0,.013);
  const reach=/tongue|pin_/.test(name)?.047:/back|status/.test(name)?.012:.030;
  return layer(.009,Math.sign(z)*reach,x*.18);
}

// The lamp hinge pins share this horizontal axis in the original assembly.
function hinge(name,y) {
  const travel=name.includes('washer')?(name.startsWith('left')?.023:-.023):
    name.includes('knob')||name.includes('grip')?-.052:name.includes('axle')?.035:.009;
  return layer(y,travel*.47,travel*.88);
}

function lamp(name) {
  if(name==='lower_cast_link')return layer(.049);
  if(name==='upper_cast_link')return layer(.113);
  if(name.includes('wrist'))return hinge(name,.158);
  if(name.includes('elbow'))return hinge(name,.083);
  if(name.includes('shoulder'))return hinge(name,.030);
  if(name==='bottom_service_plate')return layer(-.046);
  if(name==='internal_ballast_disc')return layer(-.021);
  if(name==='nonslip_base_ring'||name.startsWith('base_screw'))return layer(name==='nonslip_base_ring'?-.067:-.084);
  if(name.includes('inlet'))return layer(0,name.includes('pin')?.045:.02);
  if(name==='power_rocker'||name==='rocker_indicator'||name==='switch_bezel')return layer(name==='rocker_indicator'?.047:name==='power_rocker'?.035:.015,-.014);
  if(name==='swivel_pedestal'||name==='swivel_base_collar')return layer(name==='swivel_pedestal'?.024:.012);
  if(name==='weighted_base_shell')return layer(0);
  if(name.includes('yoke'))return hinge(name.replace('yoke','washer'),.190);
  const travel=name.includes('diffuser')?.099:name.includes('carrier')?.065:
    name.includes('retainer')?.035:name.includes('rear_cap')?-.041:name.includes('neck')?-.022:0;
  return layer(.222-travel*.97,-travel*.23,travel*.11);
}

const layouts={monitor,keyboard,mouse,mini,lamp};
export function componentTravel(object,name,relativeCenter){
  return layouts[object](name,relativeCenter.x,relativeCenter.z);
}

// Only a few mounting axes need witness lines. The starting point on the
// receiving part is the fastener's real assembled position.
export const mountingPairs={
 monitor:[['mount_screw_l_hi','sculpted_rear_shell'],['pivot_cap_left','pivot_axle'],['base_fastener','base_casting']],
 keyboard:[['keycap_esc','switch_esc'],['keycap_num_enter','switch_num_enter']],
 mouse:[['scroll_axle','ribbed_scroll_tyre'],['left_base_screw','moulded_lower_housing']],
 mini:[['cover_screw_43_34','bottom_service_cover'],['front_usb_tongue_0','front_usb_c_0'],['power_pin_left','power_socket']],
 lamp:[['elbow_locking_knob','lower_cast_link'],['wrist_axle','upper_cast_link'],['recessed_opal_diffuser','spun_metal_shade'],['base_screw_1','weighted_base_shell']],
};
