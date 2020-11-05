import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss']
})
export class SinglePersonComponent implements OnInit {

  singlePerson: SinglePerson;

  constructor(
    private route: ActivatedRoute, 
    private httpService: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: Params) => {
        this.httpService.getSinglePerson(param.get('id')).subscribe(content => {
          console.log(content);
          this.singlePerson = content;
        });
    })
  }

}

export interface SinglePerson {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<any>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: Array<any>;
  starships: Array<any>;
  url: string;
  vehicles: string;
}


