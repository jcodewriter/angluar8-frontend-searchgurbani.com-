import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sgtvaiprasadhsavaiye',
  templateUrl: './sgtvaiprasadhsavaiye.component.html',
  styleUrls: ['./sgtvaiprasadhsavaiye.component.scss']
})
export class SgtvaiprasadhsavaiyeComponent implements OnInit {
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile18.jpg)";
  param:Array<string> = ['bnl'];
  footerColor = "#024f5b";
  public cur_page:number;
  public page_info: any;
  public max_page: number = 2;

  constructor(private searchService: SearchService, private ts: Title, private meta: Meta) { }

  ngOnInit() {
    this.page_info = {lines: []};
    this.cur_page = 1;
    this.gotoPage(this.cur_page);
  }

  gotoPage(page: any){
    // baanis/tvai-prasadh-savaiye
      this.searchService.tvai_prasadh_savaiye(page).subscribe(res=>{
        this.page_info = res;
        this.ts.setTitle(res.meta_title);
        this.meta.updateTag({name: 'Description', content: res.meta_description});
        this.meta.updateTag({property: 'og:description', content: res.meta_description});
        this.meta.updateTag({name: 'Keywords', content: res.meta_keywords});
        this.meta.updateTag({property: 'og:title', content: res.meta_title});
        this.meta.updateTag({property: 'og:url', content: location.href});
        this.meta.updateTag({property: 'og:image', content: "/assets/img/share_scripture.png"});
      })
  }

}
