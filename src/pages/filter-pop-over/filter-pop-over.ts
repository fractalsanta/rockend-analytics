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
      //this.filteredAgents = _.filter(this.filteredAgents, v => !_.includes(this.selectedAgents, v.filteredAgents));
      if (this.selectedAgents.length == 0) {
        this.filteredAgents = this.agents.filter(function(item) {
          return item.name.toLowerCase().includes(val.toLowerCase());
        });
      }
      //Build filter condition if selectedagents are set
    }
  }

  public setAgent(index): void {
    this.filteredAgents[index].selected = !this.filteredAgents[index].selected;

    this.selectedAgents = _.concat(this.selectedAgents, this.filteredAgents[index]);
    _.pullAt(this.filteredAgents, index);
    console.log(this.selectedAgents, this.filteredAgents);
  }

  removeAgent(index) {
    this.filteredAgents = _.concat(this.filteredAgents, this.selectedAgents[index]);
    _.pullAt(this.selectedAgents, index);
    console.log(this.selectedAgents, this.filteredAgents);
  }
  setManagementType(event) {
    console.log(event);
    this.managementType = event;
    this.filtered = true;
  }

  clearFilters() {
    this.selectedAgents.length = 0;

    this.managementType = '';
    this.setItems();

    this.filteredAgents = _.map(this.filteredAgents, function(x) {
      x.selected = false;
      return x;
    });

    console.log(this.filteredAgents);
  }
}
