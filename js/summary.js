//-----------------------------------------------------------------------------    
function prepare_summary()
{
  var pan = document.getElementById("summary_content");
  var hash = window.location.hash;
  var txt = '<div class="hr-div"></div>';
  var i, tmp, v;
  
  txt = txt + '<span class="summary_header">Level:</span> ' + st_stats[LEVEL] + ' <span class="summary_header">gives</span> ';
  v = (base_ap_avail - ap_spent + st_stats[BONUSAP]);

  if (v < 0)
    v = '<span style="color: red; font-weight: bold;">' + v + '</span>';
  else if (v == 0)
    v = '<span style="color: white; font-weight: bold;">' + v + '</span>';
  else
    v = '<span style="color: lime; font-weight: bold;">' + v + '</span>';
  
  var max_craft = ((st_stats[INTEL] * .75) + (st_stats[PERCE] * .25)) * 2;
  if (max_craft > 179.4) max_craft += .5; // Start rounding up @ 180 skill!
  
  txt = txt + base_ap_avail + '(base) + ' + st_stats[BONUSAP] + '(bonus) - ' + ap_spent + '(spent) = ' + v + '<span class="summary_header"> AP left to spend.</span>';
  txt += '<div class="hr-div"></div>';
  txt = txt + '<span class="summary_header">CHR</span> ' + st_stats[CHARI] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">COO</span> ' + st_stats[COORD] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">DEX</span> ' + st_stats[DEXTE] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">END</span> ' + st_stats[ENDUR] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">INT</span> ' + st_stats[INTEL] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">PER</span> ' + st_stats[PERCE] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">STR</span> ' + st_stats[STREN] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<span class="summary_header">WIL</span> ' + st_stats[WILLP] + "&nbsp;&nbsp;&nbsp;";
  txt = txt + '<br />';
  txt = txt + '<span class="summary_header">Health</span> ' + health + '&nbsp;&nbsp;&nbsp;';
  txt = txt + '<span class="summary_header">Stamina</span> ' + stamina + '&nbsp;&nbsp;&nbsp;';
  txt = txt + '<span class="summary_header">Gamma</span> ' + gamma + '&nbsp;&nbsp;&nbsp;';
  txt = txt + '<span class="summary_header">Max Weight Carried</span> ' + max_weight + '&nbsp;&nbsp;&nbsp;';
  txt = txt + '<br />';
  txt = txt + '<span class="summary_header">Max Crafting Level</span> ' + parseInt(max_craft, 10);
  txt += '<div class="hr-div"></div>';
  txt = txt + '<span class="summary_header">Build Link:</span><br/>';
  txt = txt + '<span style="font-size: 80%"><a href="./' + hash + '">http://planer.fallen-earth.ru/' + hash + '</a></span>';
  txt += '<div class="hr-div"></div>';
   
  txt += '<span class="summary_header"><b>Abilities by Slot:</b></span><br />';
  for (i = AUR; i <= AIM; i++)
  {
    tmp = me_AddAbilitySlot(i);
    if (tmp != "")
    {
      txt = txt + tmp + '<br />';
    }
  } // for i

  txt += '<div class="hr-div"></div>';
  
  txt += '<span class="summary_header"><b>Abilities by Type:</b></span><br />';
  for (i = BUF; i <= DDO; i++)
  {
    tmp = me_AddAbilityType(i);
    if (tmp != "")
    {
      txt = txt + tmp + '<br />';
    }
  } // for i

  pan.innerHTML = txt;
}
//-----------------------------------------------------------------------------
function me_AddAbilityType(index)
{
  var txt = "";
  var base_stat, stat_value, total_ranks, ranks, rank_array, total_ranks, cur_rank; 

  for (i = 0; i < COUNT_ABILITIES; i++)
  {
    if (ability_details[i][3] == index)
    {
      base_stat = ability_details[i][0];
      stat_value = st_stats[base_stat];
      ranks = ability_details[i][7] + ""; // ensure string
      rank_array = ranks.split(',');
      total_ranks = rank_array.length;
      cur_rank = 0;
  
      for (j = 0; j < total_ranks; j++)
      {
        if (stat_value >= rank_array[j])
        {
          cur_rank = j + 1;  
        }
      } // for i
  
      if (cur_rank > 0)
      {
        txt = txt + ability_details[i][5] + " " + cur_rank + "&nbsp;&nbsp;";
      }
    }
  } // for i
  
  if (txt != "")
  {
    txt = '<span class="summary_header">' + type_types[index] + " Abilities: </span>" + txt;
  }
  else
  {
    txt = '<span class="summary_header">' + type_types[index] + " Abilities: NONE</span>" + txt;
  }
  
  return txt;
}
//-----------------------------------------------------------------------------    
function me_AddAbilitySlot(index)
{
  var txt = "";
  var base_stat, stat_value, total_ranks, ranks, rank_array, total_ranks, cur_rank; 

  for (i = 0; i < COUNT_ABILITIES; i++)
  {
    if (ability_details[i][2] == index)
    {
      base_stat = ability_details[i][0];
      stat_value = st_stats[base_stat];
      ranks = ability_details[i][7] + ""; // ensure string
      rank_array = ranks.split(',');
      total_ranks = rank_array.length;
      cur_rank = 0;
  
      for (j = 0; j < total_ranks; j++)
      {
        if (stat_value >= rank_array[j])
        {
          cur_rank = j + 1;  
        }
      } // for i
  
      if (cur_rank > 0)
      {
        txt = txt + ability_details[i][5] + " " + cur_rank + "&nbsp;&nbsp;";
      }
    }
  } // for i
  
  if (txt != "")
  {
    txt = '<span class="summary_header">' + slot_types[index] + " Abilities: </span>" + txt;
  }
  else
  {
    txt = '<span class="summary_header">' + slot_types[index] + " Abilities: NONE</span>" + txt;
  }
  
  return txt;
}
//-----------------------------------------------------------------------------
   

/*
     FILE ARCHIVED ON 08:55:53 Mar 22, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:00:50 Mar 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 106.528 (3)
  esindex: 0.012
  captures_list: 123.549
  CDXLines.iter: 11.106 (3)
  PetaboxLoader3.datanode: 123.762 (5)
  exclusion.robots: 0.312
  exclusion.robots.policy: 0.289
  RedisCDXSource: 1.985
  PetaboxLoader3.resolve: 53.204 (2)
  load_resource: 74.066
*/