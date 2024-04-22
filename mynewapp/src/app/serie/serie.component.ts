import { Component, OnInit } from '@angular/core';
import {Serie} from './serie';
import {SerieService} from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series = Array<Serie>();
  promedio = 0;
  constructor(private serieservice: SerieService) {
    
  }

  getseries() {
    this.serieservice.getSeries().subscribe(
      series => {this.series = series
      let suma = 0;
      for (let serie of series) {
        suma += serie.seasons;
      }
      this.promedio = suma / series.length;
      console.log(series);
      }
    );
  }

  ngOnInit() {
    this.getseries();
  }

}

