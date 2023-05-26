function add()
{
    let num1= document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let result=document.getElementById("result")
    let sum= Number(num1)+Number(num2)
    result.innerHTML=sum

}
function sub()
{
    let num1= document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let result=document.getElementById("result")
    let subb= Number(num1)-Number(num2)
    result.innerHTML=subb
}    
function mul()
{
    let num1= document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let result=document.getElementById("result")
    let mul= Number(num1)*Number(num2)
    result.innerHTML=mul
} 
function div()
{
    let num1= document.getElementById("num1").value
    let num2= document.getElementById("num2").value
    let result=document.getElementById("result")
    let div= Number(num1)/Number(num2)
    result.innerHTML=div
}       
