function initTableStyle() {
  var doc = LoadDOM("../../Style.ssx");
  var xsl = LoadDOM("../../template/siteStyle.xsl");

  var cellClass = parent.lstSelectors.value.substring(1);
  var cssAttributesNode = eval("doc.selectSingleNode(\"//CssAttributes[@css='"+cellClass+"']\")");
  var tableStyleNode = findParent('TableStyle', cssAttributesNode);
  var str = tableStyleNode.transformNode(xsl);
  document.write(str);
}

function findParent(sName, oNode) {
  while (oNode.parentNode != null) {
    if (oNode.nodeName == sName) {
      return oNode;
    }
    oNode = oNode.parentNode;
  }
  return null;
}

function LoadDOM(file) {
 var dom;
 try {
   dom = MakeDOM(null);
   dom.load(file);
 }
 catch (e) {
   alert(e.description);
 }
 return dom;
}

function MakeDOM(progID) {
  if (progID == null) {
    progID = "msxml2.DOMDocument.3.0";
  }

  var dom;
  try {
    dom = new ActiveXObject(progID);
    dom.async = false;
    dom.validateOnParse = false;
    dom.resolveExternals = false;
  }
  catch (e) {
    alert(e.description);
  }
  return dom;
}

initTableStyle();