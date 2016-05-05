// Begin Analytics
$(document).ready( function() {
});
// End Analytics

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["Navigationsleiste3"] = {
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
	"Navigationsschaltflaeche9" : { image: "../assets/images/autogen/Preise_Np_regular.png", rollover: "../assets/images/autogen/Preise_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche10" : { image: "../assets/images/autogen/Aktuelles_Np_regular.png", rollover: "../assets/images/autogen/Aktuelles_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche11" : { image: "../assets/images/autogen/Downloads_Np_regular.png", rollover: "../assets/images/autogen/Downloads_NRp_regularOver.png", w: 120, h: 57 },
	"Navigationsschaltflaeche12" : { image: "../assets/images/autogen/Kontakt_Hp_highlighted.png", rollover: "../assets/images/autogen/Kontakt_HRp_highlightedOver.png", w: 120, h: 57, opening: "slideBottom", offsetX: 0, offsetY: 57 },
	"Navigationsschaltflaeche22" : { image: "../assets/images/autogen/-ber-Uns_Np_regular.png", rollover: "../assets/images/autogen/-ber-Uns_NRp_regularOver.png", w: 120, h: 57 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "Navigationsleiste3", rollover: true, autoClose: false });
	$("#Navigationsleiste3").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#Navigationsleiste3_1").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste3_2").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste3_3").nofNavBar({isMain: false, orientation: "vertical", opening: "right", offsetX: 120, offsetY: 0 });
	$("#Navigationsleiste3 ul").hide();
});


// End Navigation Bars

