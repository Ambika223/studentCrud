import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../../model/stdinterface';
import { UuidService } from '../../service/uuid.service';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-student1',
  templateUrl: './student1.component.html',
  styleUrls: ['./student1.component.scss']
})
export class Student1Component implements OnInit {
  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('age') age!: ElementRef<HTMLInputElement>;
  @ViewChild('course') course!: ElementRef<HTMLInputElement>;
  @ViewChild('city') city!: ElementRef<HTMLInputElement>;
  @ViewChild('isActive') isActive!: ElementRef<HTMLInputElement>;


  isOnEditMode: boolean = false;
  edit_ID!: string
  studArr: Istudent[] = [
    {
      id: "1",
      name: 'Rahul',
      age: 22,
      course: 'Angular',
      city: 'Pune',
      isActive: true
    },
    {
      id: "2",
      name: 'Priya',
      age: 23,
      course: 'React',
      city: 'Mumbai',
      isActive: true
    },
    {
      id: "3",
      name: 'Amit',
      age: 24,
      course: 'Node.js',
      city: 'Delhi',
      isActive: false
    },
    {
      id: "4",
      name: 'Sneha',
      age: 21,
      course: 'JavaScript',
      city: 'Hyderabad',
      isActive: true
    },
    {
      id: "5",
      name: 'Rohit',
      age: 25,
      course: 'TypeScript',
      city: 'Bangalore',
      isActive: false
    },
    {
      id: "6",
      name: 'Neha',
      age: 22,
      course: 'Angular',
      city: 'Pune',
      isActive: true
    },
    {
      id: "7",
      name: 'Karan',
      age: 23,
      course: 'Java',
      city: 'Chennai',
      isActive: true
    }
  ];
  private edit_Id!: string;

  constructor(private _uuidService: UuidService,
    private _snackBar: SnackBarService
  ) { }
  isEditMode: boolean = false;
  ngOnInit(): void {
  }



  onAddStd() {
    let students: Istudent = {
      name: this.name.nativeElement.value,
      age: +this.age.nativeElement.value,
      course: this.course.nativeElement.value,
      city: this.city.nativeElement.value,
      isActive: this.isActive.nativeElement.value === 'Active',
      id: this._uuidService.getUUID()
    }
    // console.log(students)
    this.studArr.push(students);
    this._snackBar.openSnackBar(`The student with id ${students.id} is added successfully`);


    this.name.nativeElement.value = '';
    this.age.nativeElement.value = '',
      this.course.nativeElement.value = '',
      this.city.nativeElement.value = '',
      this.isActive.nativeElement.value = '',
      this._uuidService.getUUID()
  }

  //remove
  onRemoveStd(std: Istudent) {
    let getConfirm = confirm(`Are You Sure You want to remove the student having id ${std.id}`);
    if (getConfirm) {
      let getIndex = this.studArr.findIndex(s => s.id === std.id);
      // console.log(getIndex);
      this.studArr.splice(getIndex, 1);
      this._snackBar.openSnackBar(`The student with id ${std.id} is removed successfully`);

    }
  }


  //EDIT
  onEditStd(std: Istudent) {
    this.edit_ID = std.id;
    this.name.nativeElement.value = std.name;
    this.age.nativeElement.value = std.age.toString();
    this.course.nativeElement.value = std.course;
    this.city.nativeElement.value = std.city;
    this.isActive.nativeElement.value = std.isActive ? 'Active' : 'InActive';
    this.isOnEditMode = true;
  }


  //update
  onUpdateStd() {
    let updatestd: Istudent = {
      name: this.name.nativeElement.value,
      age: +this.age.nativeElement.value,
      course: this.course.nativeElement.value,
      city: this.city.nativeElement.value,
      isActive: this.isActive.nativeElement.value == 'Active',
      id: this.edit_ID
    }
    let getIndex = this.studArr.findIndex(std => std.id === updatestd.id);
    this.studArr[getIndex] = updatestd;
    this.isOnEditMode = false;
    this._snackBar.openSnackBar(`The student with id ${updatestd.id} is updated successfully`);

    this.name.nativeElement.value = '';
    this.age.nativeElement.value = '';
    this.course.nativeElement.value = '';
    this.city.nativeElement.value = '';
    this.isActive.nativeElement.value = '';
    this.isOnEditMode = false;
    this.edit_ID = '';
  }


  //checkbox
  onchange(std: Istudent) {
    std.isActive = !std.isActive;
    this._snackBar.openSnackBar(`CheckBox is updated successfully`);

  }
}

