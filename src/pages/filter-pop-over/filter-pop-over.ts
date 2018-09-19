import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import * as _ from 'lodash';
/**
 * Generated class for the FilterPopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-pop-over',
  templateUrl: 'filter-pop-over.html'
})
export class FilterPopOverPage {
  private homePage: HomePage;
  public filtered: boolean = false;
  agents: Array<any>;
  filteredAgents: Array<any>;
  managementType: string;
  selectedAgents: any[] = [];
  public constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = navParams.get('homePage');
  }
  ngOnInit() {}
  setItems() {
    this.agents = [
      { id: 1, name: 'Caitlin Parry', selected: false },
      { id: 2, name: 'Hayden Barlow', selected: false },
      { id: 3, name: 'Merle Zimmerman', selected: false },
      { id: 4, name: 'Ning Coles', selected: false },
      { id: 5, name: 'Peter Burke', selected: false }
    ];
    console.log(this.agents);
  }

  ionViewDidLoad() {
    //this.agents = this.homePage.agents;
  }
  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.filteredAgents = this.agents.filter(function(item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  public setAgent(index): void {
    this.filteredAgents[index].selected = !this.filteredAgents[index].selected;
    this.selectedAgents = _.filter(this.filteredAgents, { selected: true });
    this.filtered = true;
    console.log(this.selectedAgents);
  }

  setManagementType(event) {
    console.log(event);
    this.managementType = event;
    this.filtered = true;
  }
}
