// Begin MultiLayoutRegions
$(document).ready(
function() {
	$('#MehrfachLayoutBereich2LYR').MyTab({ selected: 0, event: 'click', fx: {opacity: 'toggle', duration: 'fast'} });
}
);
// End MultiLayoutRegions

// Begin Analytics
$(document).ready( function() {
	$('#Zelle63Link1').bind('click', function() { pageTracker._trackPageview('/downloads/Preispakete Drohnen-Thermographie-feb2016.pdf'); } );
});
// End Analytics

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["Navigationsleiste1"] = {
	"Navigationsschaltflaeche1" : { image: "../assets/images/autogen/Service_Np_regular.png", rollover: "../assets/images/autogen/Service_NRp_regularOver.png", w: 120, h: 57, opening: "right", offsetX: 120, offsetY: 0 },
	"Navigationsschaltflaeche13" : { image: "../assets/images/autogen/Wartung_Np_regular.png", rollover: "../assets/images/autogen/Wartung_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche14" : { image: "../assets/images/autogen/Reinigung_Np_regular.png", rollover: "../assets/images/autogen/Reinigung_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche15" : { image: "../assets/images/autogen/Reparatur_Np_regular.png", rollover: "../assets/images/autogen/Reparatur_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche16" : { image: "../assets/images/autogen/Upgrading_Np_regular.png", rollover: "../assets/images/autogen/Upgrading_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche2" : { image: "../assets/images/autogen/Service-_Hp_highlighted.png", rollover: "../assets/images/autogen/Service-_HRp_highlightedOver.png", w: 120, h: 57, opening: "right", offsetX: 120, offsetY: 0 },
	"Navigationsschaltflaeche17" : { image: "../assets/images/autogen/Thermographie_Np_regular.png", rollover: "../assets/images/autogen/Thermographie_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche18" : { image: "../assets/images/autogen/Drohnentechnik_Np_regular.png", rollover: "../assets/images/autogen/Drohnentechnik_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche19" : { image: "../assets/images/autogen/Kennlinienmessung_Np_regular.png", rollover: "../assets/images/autogen/Kennlinienmessung_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche20" : { image: "../assets/images/autogen/Elektrolumineszenz_Np_regular.png", rollover: "../assets/images/autogen/Elektrolumineszenz_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche3" : { image: "../assets/images/autogen/Produkte_Np_regular.png", rollover: "../assets/images/autogen/Produkte_NRp_regularOver.png", w: 120, h: 57, opening: "right", offsetX: 120, offsetY: 0 },
	"Navigationsschaltflaeche21" : { image: "../assets/images/autogen/Solarmodule_Np_regular.png", rollover: "../assets/images/autogen/Solarmodule_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche22" : { image: "../assets/images/autogen/WR-Speicher_Np_regular.png", rollover: "../assets/images/autogen/WR-Speicher_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche23" : { image: "../assets/images/autogen/Montage_Np_regular.png", rollover: "../assets/images/autogen/Montage_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche4" : { image: "../assets/images/autogen/Wissen_Np_regular.png", rollover: "../assets/images/autogen/Wissen_NRp_regularOver.png", w: 120, h: 57, opening: "right", offsetX: 120, offsetY: 0 },
	"Navigationsschaltflaeche24" : { image: "../assets/images/autogen/Zertif_Np_regular.png", rollover: "../assets/images/autogen/Zertif_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche5" : { image: "../assets/images/autogen/Preise_Np_regular.png", rollover: "../assets/images/autogen/Preise_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche6" : { image: "../assets/images/autogen/Kontakt_Np_regular.png", rollover: "../assets/images/autogen/Kontakt_NRp_regularOver.png", w: 120, h: 57, opening: "right", offsetX: 120, offsetY: 0 },
	"Navigationsschaltflaeche25" : { image: "../assets/images/autogen/-ber-Uns_Np_regular.png", rollover: "../assets/images/autogen/-ber-Uns_NRp_regularOver.png", w: 120, h: 57 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "Navigationsleiste1", rollover: true, autoClose: false });
	$("#Navigationsleiste1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#Navigationsleiste1_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste1_2").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste1_3").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste1_4").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste1_5").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste1 ul").hide();
});


// End Navigation Bars

