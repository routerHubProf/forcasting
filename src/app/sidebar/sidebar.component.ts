import { Component, OnInit } from '@angular/core';
import { Router , RouterModule,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  section:string ='scenarioBuilder';
  upload ='';
  baseScenario ='';
  newScenario ='';
  compareScenario ='';
  url=''
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = '/'+(this.router.url).split('/').pop();
    console.log(this.url);
    this.upload ='';
    this.baseScenario = '';
    this.newScenario ='';
    this.compareScenario ='';
    switch(this.url){
      case '/upload' : this.upload = 'active';break;
      case '/baseScenario' : this.baseScenario = 'active'; break;
      case '/newScenario' : this.newScenario = 'active'; break;
      case '/compareScenario' : this.compareScenario = 'active'; break;
    }

  }

  display(clickedSection:string){
    this.section = clickedSection;
    this.upload ='';
    this.baseScenario = '';
    this.newScenario ='';
    this.compareScenario ='';
    switch(clickedSection){
      case 'upload' : this.upload = 'active';break;
      case 'baseScenario' : this.baseScenario = 'active'; break;
      case 'newScenario' : this.newScenario = 'active'; break;
      case 'compareScenario' : this.compareScenario = 'active'; break;
    }
  }

}
