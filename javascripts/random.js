<script type="text/javascript">

//INDEX VERSION ONLY

//pages (use full url if in a different domain);
function jumprandom() {
var page1 = "http://dlgp1hkucatering.omeka.net/items/show/1";
var page2 = "http://dlgp1hkucatering.omeka.net/items/show/2";
var page3 = "http://dlgp1hkucatering.omeka.net/items/show/3";
var page4 = "http://dlgp1hkucatering.omeka.net/items/show/4";

//array (add all the pages inside [])
var pages = [page1,page2,page3,page4];
function showRandomPage()
{
    var num = Math.round(Math.random() * (pages.length-1));
    window.location.href=pages[num];
    console.log(num);
};
