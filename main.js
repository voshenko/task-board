function saveNote() {
   const inputs = document.querySelectorAll('input');

   // if (inputs[0].value = null || inputs[1].value == null || inputs[2].value == null) {
   //    alert('Must write task!!!');
   // }

   const noteInf = {
      noteText: inputs[0].value,
      noteDate: inputs[1].value,
      noteTime: inputs[2].value
   };

   const currentNote = localStorage.getItem('allNotes');
   let arr = [];
   if (currentNote) {
      arr = JSON.parse(currentNote);
   }
   arr.push(noteInf);
   localStorage.setItem('allNotes', JSON.stringify(arr));

   inputs[0].value = " ";
   inputs[1].value = " ";
   inputs[2].value = " ";
   creatNote();
}


function creatNote() {
   const currentNote = localStorage.getItem('allNotes');
   if (currentNote) {
      let noteDiv = `
      <div>
      `
      const arr = JSON.parse(currentNote);
      for (const note of arr) {
         noteDiv += `
         <div class="note"  id = "newTask">
         <div class ="tool">
         <button class="delete" id="btnDelete"><i class="bi bi-x-square-fill"></i></button>
         </div>
         
              <textarea id="task"  wrap="hard">${note.noteText}</textarea>
              <div class ="time">${note.noteDate}</div>
              <div class ="time">${note.noteTime}</div>
         </div>
         `
      }
      noteDiv += `</div>`
      const contenierDiv = document.querySelector('#contenierDiv');
      contenierDiv.innerHTML = noteDiv
      const btnDelete = document.querySelector('#btnDelete');
      btnDelete.onclick = deleteNote;
   }

}

function deleteNote() {
   const newTask = document.querySelector('#newTask');
   newTask.remove();
   localStorage.clear();
}


function clearTask() {
   const inputs = document.querySelectorAll('input');
   const noteInf = {
      noteText: inputs[0].value,
      noteDate: inputs[1].value,
      noteTime: inputs[2].value
   };
   noteInf = "";
   return noteInf;
}


function onWindowLoad() {
   const btnSave = document.querySelector('#btnSave');
   const btnClear = document.querySelector('#btnClear');
   // const btnDelete = document.querySelector('#btnDelete');
   btnSave.onclick = saveNote;
   btnClear.onclick = clearTask;
   // btnDelete.onclick = deleteNote;
   creatNote();
}

window.onload = onWindowLoad;