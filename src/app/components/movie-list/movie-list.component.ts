import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any[];

  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        "Title": "Iron Man",
        "Year": "2008",
        "Poster": "https://drive.google.com/uc?export=view&id=1VKR9o7xcD-hDKBp15cvrhbQ1NzXr4Mic"
      },
      {
        "Title": "Iron Man 2",
        "Year": "2010",
        "Poster": "https://drive.google.com/uc?export=view&id=1VNYLkntMb8TRI5EYArVwTysk2JyoeTow"
      },
      {
        "Title": "Iron Man 3",
        "Year": "2013",
        "Poster": "https://drive.google.com/uc?export=view&id=1VVnwoJoTBPVfcprgzqYh0FJY-cWrqU4F"
      }
    ]
  }

}
