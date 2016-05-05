<?php 
  $admin= 'kontakt@domain.de'; 
  $subject= 'E-Mail vom Kunden'; 
  $message= 'Nachrichten an '.$admin.' von '.$email.":\n\n"; 
  foreach($HTTP_POST_VARS as $name=> $value) { 
    $message.= "$name:$value\n"; 
  } 
  mail($admin, $subject, $message, "From: $email"); 
  header('Location: http://'.getenv('HTTP_HOST').'/html/danke.html'); 
?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"><HTML><HEAD><TITLE>Der Solaranlagen-Experte---Solarstadl Hemmetter</TITLE><META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=ISO-8859-1"><META NAME="Generator" CONTENT="C 2005 NOF-Club GbR Toto  //  www.nof-club.de"><STYLE>BODY
     {scrollbar-3dlight-color:;
           scrollbar-arrow-color:#0138be;
           scrollbar-base-color:white;
           scrollbar-darkshadow-color:#aaaaaa;
           scrollbar-face-color:#548E18;
           scrollbar-highlight-color:grey;
           scrollbar-shadow-color:white}
  </STYLE><LINK REL="STYLESHEET" TYPE="text/css" HREF="file:///C:/Programme/NetObjects/NetObjects Fusion 9.0/User Sites/Solarstadl-neu/Solarstadl-neu/Preview/style.css"><LINK REL="STYLESHEET" TYPE="text/css" HREF="file:///C:/Programme/NetObjects/NetObjects Fusion 9.0/User Sites/Solarstadl-neu/Solarstadl-neu/Preview/site.css"></HEAD><BODY STYLE="margin: 0px;"><table border=0 cellspacing=0 cellpadding=0 width="100%">
<tr align=center>
<td align=center></BODY></HTML> 