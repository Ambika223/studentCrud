import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IMovieArr } from 'src/app/shared/model/movieinterface';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UuidService } from 'src/app/shared/service/uuid.service';
import { SnackBarService } from 'src/app/shared/service/snack-bar.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatIconModule],

})
export class MovieComponent implements OnInit {


  isOnEditMode: boolean = false;
  editId!: string;



  constructor(private _uuidService: UuidService,
    private _SnackBarService: SnackBarService
  ) { }
  movieArr: IMovieArr[] = [
    {
      id: "1",
      movieName: '3 Idiots',
      image: 'https://moviekoop.com/Images/Cover_Photos/3-idiots-hindi-movie.jpg',
      content: 'Three friends experience college life and learn important lessons about education and friendship.',
      genre: 'Comedy, Drama',
      rating: 8.4
    },
    {
      id: "2",
      movieName: 'Dangal',
      image: 'https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
      content: 'A father trains his daughters to become professional wrestlers.',
      genre: 'Sports, Drama',
      rating: 8.3
    },
    {
      id: "3",
      movieName: 'Baahubali',
      image: 'https://moviekoop.com/Images/Cover_Photos/baahubali-1-the-conclusion.jpg',
      content: 'A young man discovers his royal heritage and fights to claim his kingdom.',
      genre: 'Action, Fantasy',
      rating: 8.0
    },
    {
      id: "4",
      movieName: 'Drishyam',
      image: 'https://moviekoop.com/Images/Cover_Photos/Drishyam.jpg',
      content: 'A father goes to great lengths to protect his family.',
      genre: 'Thriller, Crime',
      rating: 8.2
    },
    {
      id: "5",
      movieName: 'RRR',
      image: 'https://image.tmdb.org/t/p/w500/nEufeZlyAOLqO2brrs0yeF1lgXO.jpg',
      content: 'Two revolutionaries develop a strong friendship while fighting against British rule.',
      genre: 'Action, Drama',
      rating: 7.8
    }
  ];
  ngOnInit(): void {
  }



  trackById(index: number, movie: IMovieArr): string {
    return movie.id;
  }



  @ViewChild('movieName') movieName!: ElementRef<HTMLInputElement>;
  @ViewChild('image') image!: ElementRef<HTMLInputElement>;
  @ViewChild('content') content!: ElementRef<HTMLInputElement>;
  @ViewChild('genre') genre!: ElementRef<HTMLInputElement>;
  @ViewChild('rating') rating!: ElementRef<HTMLInputElement>;


  private formreset(): void {
    this.movieName.nativeElement.value = '';
    this.image.nativeElement.value = '';
    this.content.nativeElement.value = '';
    this.genre.nativeElement.value = '';
    this.rating.nativeElement.value = '';
  }

  //Add
  onAddMovie() {
    const movieObj: IMovieArr = {
      movieName: this.movieName.nativeElement.value,
      image: this.image.nativeElement.value,
      content: this.content.nativeElement.value,
      genre: this.genre.nativeElement.value,
      rating: +this.rating.nativeElement.value,
      id: this._uuidService.getUUID()
    }
    this.movieArr.push(movieObj);
    this.formreset();
  }


  //EDIT
  onEditMovie(movie: IMovieArr) {
    this.movieName.nativeElement.value = movie.movieName;
    this.image.nativeElement.value = movie.image;
    this.content.nativeElement.value = movie.content;
    this.genre.nativeElement.value = movie.genre;
    this.rating.nativeElement.value = movie.rating.toString();
    this.editId = movie.id;
    this.isOnEditMode = true;
  }


  onUpdateMovie() {
    const movieObj: IMovieArr = {
      movieName: this.movieName.nativeElement.value,
      image: this.image.nativeElement.value,
      content: this.content.nativeElement.value,
      genre: this.genre.nativeElement.value,
      rating: +this.rating.nativeElement.value,
      id: this.editId
    }
    let getIndex = this.movieArr.findIndex(movie => movie.id === this.editId);
    if (getIndex > -1) {
      this.movieArr[getIndex] = movieObj;
      this.isOnEditMode = false;
      this.editId = '';
      this.formreset();
    }
  }


  //Remove
  onRemoveMovie(mov: IMovieArr) {
    let getConfirm = confirm(`Are You Sure You Want to remove this movie`)
    if (getConfirm) {
      let removeIndex = this.movieArr.findIndex(m => m.id === mov.id);
      if (removeIndex > -1) {
        this.movieArr.splice(removeIndex, 1);

      }
    }
  }
}
