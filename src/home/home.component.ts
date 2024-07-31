import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {CdkDrag, CdkDragDrop, CdkDropList, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Itask } from './home.interface';
import { RouterOutlet, RouterLink , Router} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatRippleModule, RouterOutlet,MatCardModule, MatToolbarModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, DragDropModule,CdkDropList, CdkDrag], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  toDoList!: Itask [];
  doingList!: Itask [];
  doneList!: Itask [];
  inputForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: Router){}

  ngOnInit(){
    this.toDoList = [];
    this.doingList = [];
    this.doneList = [];
    this.inputForm = this.fb.group({
      input: ['', Validators.required]
    });
  }

goToHome(path: string){
  this.route.navigate([path])
}

  check(){
    console.log(this.toDoList)
  }

  drop(event: CdkDragDrop<Itask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
     console.log(event.container.data)
  }

// allow you to add to the component library
  addTask(){
      this.toDoList.push(
        {
          description: this.inputForm.value.input,
          boolean: false
        }
      );
      this.inputForm.reset();

  }

  deleteTask(index: number){
    this.toDoList.splice(index, 1);
  }

  deleteDoingTask(index: number){
    this.doingList.splice(index, 1);
  }
  
  deleteDoneTask(index: number){
    this.doneList.splice(index, 1);
  }
  
  
}
