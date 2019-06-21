var not   = /\s(not)\s/gi
var equal = /\s(equal)\s/gi
var or    = /\s(or)\s/gi
var and   = /\s(and)\s/gi
var True  = /(true)\s/gi
var False = /(false)\s/gi
var copy  = /(copy)/gi
var ok    = /\s(ok|okay)\s/gi
var javascript   = /(javascript)/gi 
var google = /(google)/gi
var geek   = /\s*(geek)\s*/gi
var linux = /(linux|unix)/gi
var move = /(mv|cut|rename)\s/gi
var password = /(password)/gi
var start = "<span style='color:#54FE55;background:black;padding:0.25rem;font-family:monospace'>"
var end   = "</span>"
var home  = /\s(home)\s?/gi 

var words = [{'pattern':home,'val':'127.0.0.1'},{'pattern':not,'val':'!'},{'pattern':equal,'val':'=='},{'pattern':and,'val':'&&'},{'pattern':or,'val':'||'},{'pattern':password,'val':'xxxxxxxx'},{'pattern':True,'val':'while(1)'},{'pattern':False,'val':'0'},{'pattern':copy,'val':'cp'},{'pattern':move,'val':'mv'},{'pattern':google,'val':'G-root'},{'pattern':ok,'val':'200'},{'pattern':javascript,'val':'JS'},{'pattern':geek,'val':'script kiddie'}]

for(let i=0;i<words.length;i++){
	document.body.innerHTML = document.body.innerHTML.replace(words[i].pattern,start+words[i].val + end);
}


