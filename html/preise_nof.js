// Begin Analytics
$(document).ready( function() {
	$('#Zelle51Link1').bind('click', function() { pageTracker._trackPageview('/downloads/LGE_DataSheet_LGxxxS1C-L4-DE-201506.pdf'); } );
	$('#Zelle52Link1').bind('click', function() { pageTracker._trackPageview('/downloads/1-Preise-LG300Black-Okt2015.pdf'); } );
	$('#Zelle53Link1').bind('click', function() { pageTracker._trackPageview('/downloads/LGE_DataSheet_LGxxxN1C-G4-DE-201506.pdf'); } );
	$('#Zelle54Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preiselg300.pdf'); } );
	$('#Zelle55Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preiselg305.pdf'); } );
	$('#Zelle56Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preisesw250p.pdf'); } );
	$('#Zelle57Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preisesw260p.pdf'); } );
	$('#Zelle58Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preiseswblue250.pdf'); } );
	$('#Zelle59Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preiseswblue260.pdf'); } );
	$('#Zelle60Link1').bind('click', function() { pageTracker._trackPageview('/downloads/Preisliste.pdf'); } );
	$('#Zelle61Link1').bind('click', function() { pageTracker._trackPageview('/downloads/preislisteservice.pdf'); } );
	$('#Zelle62Link1').bind('click', function() { pageTracker._trackPageview('/downloads/Preispakete Thermo+Reinigung+Clean&Fly.pdf'); } );
});
// End Analytics

// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
	if (jQuery.browser.safari){
		$(".nof-lyr>br:first").each(function () {
			$(this).replaceWith("<div style='height:0px'>&nbsp;</div>");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["Navigationsleiste2"] = {
	"Navigationsschaltflaeche7" : { image: "../assets/images/autogen/Service_Np_regular.png", rollover: "../assets/images/autogen/Service_NRp_regularOver.png", w: 120, h: 57, opening: "slideBottom", offsetX: 0, offsetY: 57 },
	"Navigationsschaltflaeche13" : { image: "../assets/images/autogen/Wartung_Np_regular.png", rollover: "../assets/images/autogen/Wartung_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche14" : { image: "../assets/images/autogen/Reinigung_Np_regular.png", rollover: "../assets/images/autogen/Reinigung_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche15" : { image: "../assets/images/autogen/Reparatur_Np_regular.png", rollover: "../assets/images/autogen/Reparatur_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche16" : { image: "../assets/images/autogen/Upgrading_Np_regular.png", rollover: "../assets/images/autogen/Upgrading_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche17" : { image: "../assets/images/autogen/Thermografie_Np_regular.png", rollover: "../assets/images/autogen/Thermografie_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche18" : { image: "../assets/images/autogen/Drohnen_Np_regular.png", rollover: "../assets/images/autogen/Drohnen_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche8" : { image: "../assets/images/autogen/Produkte_Np_regular.png", rollover: "../assets/images/autogen/Produkte_NRp_regularOver.png", w: 120, h: 57, opening: "slideBottom", offsetX: 0, offsetY: 57 },
	"Navigationsschaltflaeche19" : { image: "../assets/images/autogen/Solarmodule_Np_regular.png", rollover: "../assets/images/autogen/Solarmodule_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche20" : { image: "../assets/images/autogen/WR-Speicher_Np_regular.png", rollover: "../assets/images/autogen/WR-Speicher_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche21" : { image: "../assets/images/autogen/Montage_Np_regular.png", rollover: "../assets/images/autogen/Montage_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche9" : { image: "../assets/images/autogen/Preise_Hp_highlighted.png", rollover: "../assets/images/autogen/Preise_HRp_highlightedOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche10" : { image: "../assets/images/autogen/Aktuelles_Np_regular.png", rollover: "../assets/images/autogen/Aktuelles_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche11" : { image: "../assets/images/autogen/Downloads_Np_regular.png", rollover: "../assets/images/autogen/Downloads_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche12" : { image: "../assets/images/autogen/Kontakt_Np_regular_1.png", rollover: "../assets/images/autogen/Kontakt_NRp_regularOver_1.png", w: 120, h: 57, opening: "slideBottom", offsetX: 0, offsetY: 57 },
	"Navigationsschaltflaeche22" : { image: "../assets/images/autogen/-ber-Uns_Np_regular.png", rollover: "../assets/images/autogen/-ber-Uns_NRp_regularOver.png", w: 120, h: 57 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "Navigationsleiste2", rollover: true, autoClose: false });
	$("#Navigationsleiste2").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#Navigationsleiste2_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste2_2").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste2_3").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste2 ul").hide();
});


// End Navigation Bars

