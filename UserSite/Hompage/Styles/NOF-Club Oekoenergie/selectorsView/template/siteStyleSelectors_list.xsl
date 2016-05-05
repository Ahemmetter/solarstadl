<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl= "http://www.w3.org/1999/XSL/Transform"
                 xmlns:msxsl="urn:schemas-microsoft-com:xslt"
                 xmlns:nof="http://netobjects.com/nof"
                 version="1.0">

<xsl:output method="html"/>
<xsl:output cdata-section-elements="SCRIPT"/>
	<xsl:template match="/">
		<form name="myList" style="margin:auto;">
			<select name="select" size="10" id="selectors" onchange="parent.setPreview(this.value);" type="text">
				<xsl:apply-templates select="SiteStyle/Group"/>
			</select>
		</form>
	</xsl:template>
	<xsl:template match="SiteStyle/Group">          
		<xsl:for-each select="Selector">
			<option value="{@id}"><xsl:value-of select="@id"/></option>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
