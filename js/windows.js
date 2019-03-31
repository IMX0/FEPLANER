//-----------------------------------------------------------------------------   
function close_all_sub_windows()  
{ 
  close_sub_window('summarybox');
  close_sub_window('aboutbox');
  close_sub_window('startertownsbox');
  close_sub_window('factionwheelbox');
  close_sub_window('townlevelsbox');
  close_sub_window('banklocationsbox');
  close_sub_window('fasttravelbox');
  close_sub_window('transportbox');
  close_sub_window('creationguidebox');
  close_sub_window('predefinedbuildsbox');
  close_sub_window('garagemapbox');
  close_sub_window('capstonesbox');
  close_sub_window('craftingbox');
  close_sub_window('bonusapbox');
  close_sub_window('fansitebox');
  close_sub_window('abilitylistbox');
}
//-----------------------------------------------------------------------------  
function open_sub_window(name)
{
  close_all_sub_windows();
  document.getElementById(name).style.visibility = "visible";
  if (name == "transportbox")
  {
    document.getElementById("animals").style.visibility = "visible";
  }
}
//-----------------------------------------------------------------------------  
function close_sub_window(name)
{
  if (name == "transportbox")
  {
    document.getElementById("vehicles").style.visibility = "hidden";
    document.getElementById("animals").style.visibility = "hidden";
  }
  document.getElementById(name).style.visibility = "hidden";
  create_link();
}
//-----------------------------------------------------------------------------  
function showanimals()
{
  document.getElementById("vehicles").style.visibility = "hidden";
  document.getElementById("animals").style.visibility = "visible";  
}
//-----------------------------------------------------------------------------  
function showvehicles()
{
  document.getElementById("vehicles").style.visibility = "visible";
  document.getElementById("animals").style.visibility = "hidden";  
}
//-----------------------------------------------------------------------------  

/*
     FILE ARCHIVED ON 09:00:29 Mar 22, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:00:51 Mar 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 149.687 (3)
  esindex: 0.01
  captures_list: 168.617
  CDXLines.iter: 13.64 (3)
  PetaboxLoader3.datanode: 95.668 (5)
  exclusion.robots: 0.263
  exclusion.robots.policy: 0.246
  RedisCDXSource: 1.694
  PetaboxLoader3.resolve: 99.408 (2)
  load_resource: 180.908
*/