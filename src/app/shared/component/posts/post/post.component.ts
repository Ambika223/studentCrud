import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPost } from 'src/app/shared/model/postinterface';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private _uuidService: UuidService) { }
  @ViewChild('title') todoTitle!: ElementRef<HTMLInputElement>;
  @ViewChild('image') todoImage!: ElementRef<HTMLInputElement>;
  @ViewChild('description') todoDescription!: ElementRef<HTMLTextAreaElement>;

  isOnEditMode: boolean = false;

  ngOnInit(): void {
  }



  postArr: IPost[] = [
    {
      id: "1",
      title: 'Mountain Sunrise',
      description: 'Early morning light hitting the ridge before the valley wakes up.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: "2",
      title: 'Minimalist Workspace',
      description: 'Clean desk setup for focused coding and daily planning.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: "3",
      title: 'Morning Pour-Over',
      description: 'Freshly brewed coffee to start the day slow and steady.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: "4",
      title: 'Coastal Trail',
      description: 'Ocean breeze and rocky cliffs along an afternoon walk.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80'
    }
  ];


  trackById(index: number, post: IPost): string {
    return post.id;
  }

  editId!: string;


  private resetForm(): void {
    this.todoTitle.nativeElement.value = '';
    this.todoImage.nativeElement.value = '';
    this.todoDescription.nativeElement.value = '';
  }

  onAddPost() {
    let postObj: IPost = {
      title: this.todoTitle.nativeElement.value,
      image: this.todoImage.nativeElement.value,
      description: this.todoDescription.nativeElement.value,
      id: this._uuidService.getUUID()
    }
    this.postArr.push(postObj);
    this.resetForm();
  }

  //EDIT
  onEdit(post: IPost) {
    this.todoTitle.nativeElement.value = post.title;
    this.todoImage.nativeElement.value = post.image;
    this.todoDescription.nativeElement.value = post.description;
    this.editId = post.id;
    this.isOnEditMode = true;
    post.isEditing = true;
  }


  //UPDATE
  onUpdatePost() {
    let updateindex = this.postArr.findIndex(p => p.id === this.editId);
    if (updateindex > -1) {
      this.postArr[updateindex] = {
        ...this.postArr[updateindex],
        title: this.todoTitle.nativeElement.value,
        image: this.todoImage.nativeElement.value,
        description: this.todoDescription.nativeElement.value,
        isEditing: false
      };
    }

    this.isOnEditMode = false;
    this.editId = '';
    this.resetForm();
  }


  onDelete(post: IPost) {
    let getConfirm = confirm(`Are You sure You want to remove this post`);
    if (getConfirm) {
      let removeIndex = this.postArr.findIndex(p => p.id === post.id);
      this.postArr.splice(removeIndex, 1);
    }
  }


}
