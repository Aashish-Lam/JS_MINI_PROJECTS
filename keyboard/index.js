const insert= document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
   insert.innerHTML=`
   <h2>A basic HTML table</h2>
   
   <table style="width:100%">
     <tr>
       <th>key</th>
       <th>Keycode</th>
       <th>code</th>
     </tr>
     <tr>
       <td>${e.key}</td>
       <td>${e.keyCode}</td>
       <td>${e.code}</td>
     </tr>
     
   </table>
   `
   
})