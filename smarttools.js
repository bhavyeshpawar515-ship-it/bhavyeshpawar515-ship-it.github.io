// SmartToolsHub JavaScript Library
// Version 1.0

const SmartTools = {

showMessage(message){
alert(message);
},

downloadFile(blob,fileName){

const link=document.createElement("a");

link.href=URL.createObjectURL(blob);

link.download=fileName;

link.click();

URL.revokeObjectURL(link.href);

},

readFile(file){

return new Promise((resolve,reject)=>{

const reader=new FileReader();

reader.onload=()=>resolve(reader.result);

reader.onerror=reject;

reader.readAsArrayBuffer(file);

});

},

formatSize(bytes){

if(bytes<1024) return bytes+" Bytes";

if(bytes<1024*1024)
return (bytes/1024).toFixed(2)+" KB";

return (bytes/1024/1024).toFixed(2)+" MB";

},

getFileExtension(name){

return name.split(".").pop().toLowerCase();

}

};