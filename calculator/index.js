function buttonclick(val){
    document.getElementById('screen').value+=val
   
}
function btnclear(){
    document.getElementById('screen').value=''

}
function equalClick(){
    var text1=document.getElementById('screen').value;
    var result = eval(text1);
    document.getElementById('screen').value=''
    document.getElementById('screen').value+=result
}