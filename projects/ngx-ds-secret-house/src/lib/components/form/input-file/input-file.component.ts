import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'sh-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.scss']
})
export class InputFileComponent implements OnInit {
  @Input() id: string = '';
  @Input() control!: FormControl;
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() help: string = '';
  @Input() state: string = '';
  @Input() path: string = 'https://picsum.photos/seed/picsum/200/300';

  constructor() { }

  ngOnInit(): void {

    //selecting all required elements
    // const dropArea : any = document.querySelector(".drag-area"),
    //   dragText = dropArea.querySelector("header"),
    //   button = dropArea.querySelector("button"),
    //   input = dropArea.querySelector("input");
    
    //   let file : any; //this is a global variable and we'll use it inside multiple functions
    
    // button.onclick = () => {
    //   input.click(); //if user click on the button then the input also clicked
    // }

    // input.addEventListener("change", function () {
    //   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    //   // file = this.files[0];
    //   dropArea.classList.add("active");
    //   showFile(); //calling function
    // });

    // //If user Drag File Over DropArea
    // dropArea.addEventListener("dragover", (event: any) => {
    //   event.preventDefault(); //preventing from default behaviour
    //   dropArea.classList.add("active");
    //   dragText.textContent = "Release to Upload File";
    // });

    // //If user leave dragged File from DropArea
    // dropArea.addEventListener("dragleave", () => {
    //   dropArea.classList.remove("active");
    //   dragText.textContent = "Drag & Drop to Upload File";
    // });

    // //If user drop File on DropArea
    // dropArea.addEventListener("drop", (event: any) => {
    //   event.preventDefault(); //preventing from default behaviour
    //   //getting user select file and [0] this means if user select multiple files then we'll select only the first one
    //   file = event.dataTransfer.files[0];
    //   showFile(); //calling function
    // });

    // function showFile() {
    //   let fileType = file.type; //getting selected file type
    //   let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
    //   if (validExtensions.includes(fileType)) { //if user selected file is an image file
    //     let fileReader = new FileReader(); //creating new FileReader object
    //     fileReader.onload = () => {
    //       let fileURL = fileReader.result; //passing user file source in fileURL variable
    //       // UNCOMMENT THIS BELOW LINE. I GOT AN ERROR WHILE UPLOADING THIS POST SO I COMMENTED IT
    //       let imgTag = `<img src="${fileURL}" alt="image">`; //creating an img tag and passing user selected file source inside src attribute
    //       dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    //     }
    //     fileReader.readAsDataURL(file);
    //   } else {
    //     alert("This is not an Image File!");
    //     dropArea.classList.remove("active");
    //     dragText.textContent = "Drag & Drop to Upload File";
    //   }
    // }

  }

}
