import { Agent, IPropertyManagementService } from '../../app/shared';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Generated class for the PropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-property',
  templateUrl: 'property.html'
})
export class PropertyPage {
  constructor(private Api: IPropertyManagementService, private route: ActivatedRoute) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PropertyPage');
  }

  ngOnInit() {
    this.Api.getPortfolioAgents(2079, 'body', true).subscribe(value =>
      setTimeout(() => {
        console.log(value);
        // const allProducts = value;
        // this.route.params.subscribe(
        //   params => {
        //     const id = +params['id']
        //     this.Api = allProducts.filter(p => p.category.id === id)
        //   }
        // )
      }, 2000)
    );
  }
}
