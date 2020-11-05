import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor(  private httpService: HttpService, 
                private activatedRoute: ActivatedRoute, 
                private router: Router) { }

  peopleList: Array<person>;
  searchResult: string;

  ngOnInit(): void {
    
    this.activatedRoute.queryParamMap.subscribe((query: Params) => {
      if(query.get('search')){
        this.triggerSearch(query.get('search'))
      } else {
          this.httpService.getPeopleList().subscribe(people => {
            this.peopleList = people.results;
          });
      }
    })
  }

  filterList(f: NgForm){
    this.triggerSearch(f.value.name)
  }
  

  triggerSearch(query){
    this.httpService.search(query).subscribe(people => {
      this.peopleList = people.results;
      this.searchResult = query;
      this.router.navigate(
        [], 
        {
          relativeTo: this.activatedRoute,
          queryParams: { search: query }, 
        });
    });
  }
}

export interface person {
  birth_year: string;
  gender: string
  hair_color: string
  height: string
  mass: string
  name: string
  skin_color: string
}
