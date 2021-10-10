function icore_init() {
    var t = new RegExp("\\[heimu\\](.*?)\\[/heimu\\]","g");
    $("div.entry-content,div#morphing-content>div.page").children("p,blockquote,div.tip").each(function() {
        var n = "";
        $(this).contents().each(function() {
            var i = this.outerHTML;
            null == i && (i = $(this).text()),
            null != i && ((1 === this.nodeType || 3 === this.nodeType) && "IMG" != this.tagName && "PRE" != this.tagName && "CODE" != this.tagName && "SCRIPT" != this.tagName && "BR" != this.tagName ? -1 != $.inArray("light-link", this.classList) || function(t=this.classList) {
                if (null == t || null == t)
                    return !1;
                for (var n = 0; n < t.length; n++)
                    if (-1 != t[n].indexOf("MathJax"))
                        return !0;
                return !1
            }() ? n += i : (i = i.replace(t, function() {
                return '<span class="heimu" title="\u4f60\u77e5\u9053\u7684\u592a\u591a\u4e86">' + arguments[1] + "</span>"
            }),
            n += i) : n += i)
        }),
        $(this).html(n)
    });
}
icore_init();