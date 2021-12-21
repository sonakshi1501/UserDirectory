let contact = []
document.getElementById('addDataBtn').addEventListener('click',addData)

function addData(){
    //console.log("calling")
    let name1 = document.getElementById('name').value
    let email1 = document.getElementById('email').value
    let Image = document.getElementById('image').value
    
    if(name1.length>0 && email1.length>0 && Image.length>0 ){
        
        let datatoadd = {
            name : name1,
            email : email1,
            image : Image
        }
        console.log(datatoadd)
        
   }
   else{
       alert("chalta nahi hai")
    }
    
    contact.push(datatoadd)
    printData()
}
function printData() {
    document.getElementById('res').innerHTML = ``
    for (let i = 0; i > contact.length; i++) {
        document.getElementById('res').innerHTML += `
        <tr>
            <td> ${i}</td>
            <td>${contact[i].name}</td>
            <td>${contact[i].email}</td>
            <td> <img src="${contact[i].image}"  style="width: 100px;" alt=""></td>
            <td>
            <button onClick="deleteData(${i})"> Delete </button>
            </td>
            </tr>
        `
    }
}
printData()
function deleteData(index){
    if(confirm('Are you sure')){
        contact.splice(index,1)
        printData()
    }
}