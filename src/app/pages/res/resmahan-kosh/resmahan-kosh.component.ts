import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { KeyPress } from 'src/app/global/utility';

@Component({
  selector: 'app-resmahan-kosh',
  templateUrl: './resmahan-kosh.component.html',
  styleUrls: ['./resmahan-kosh.component.scss']
})
export class ResmahanKoshComponent implements OnInit {
  @ViewChild('searchText', {static: false}) searchText: ElementRef;
  backgroundImg: string = "url(./assets/img/backgrounds/Sdamasktile11.jpg)";
  param:Array<string> = ['home'];
  footerColor = "#7b0400";
  showKeyboard: boolean;
  alphas: any[];
  allWords: any[];
  table_name: string;
  q: string;
  show_autoset: boolean;
  constructor(private titleService: Title, private router: Router, private searchService: SearchService, private meta: Meta) { }

  ngOnInit() {
    this.showKeyboard = true;
    this.alphas = ['ੳ','ਅ','ੲ','ਸ','ਹ','ਕ','ਖ','ਗ','ਘ','ਙ','ਚ','ਛ','ਜ','ਝ','ਞ','ਟ','ਠ','ਡ','ਢ','ਣ','ਤ','ਥ','ਦ','ਧ','ਨ','ਪ','ਫ','ਬ','ਭ','ਮ','ਯ','ਰ','ਲ','ਵ','ੜ'];
    this.titleService.setTitle('Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha::- SearchGurbani.com');
    this.meta.addTags([
      {name: 'Description', content: 'Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha, popularly known as Mahankosh is a not only the first dictionary of Sikh Scripture and books on Sikh Religion '},
      {name: 'og:description', content: 'Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha, popularly known as Mahankosh is a not only the first dictionary of Sikh Scripture and books on Sikh Religion '},
      {name: 'Keywords', content: 'Sri Guru ,Granth ,Kosh , Mahan Kosh, Kahan Singh, Nabha'},
      {name: 'og:title', content: 'Gur Shabad Ratanakar Mahankosh by Kahan Singh Nabha::- SearchGurbani.com'}
    ]);
    this.table_name = "GurShabad Ratanakar Mahankosh";
    this.allWords = [];
    this.show_autoset = true;
    this.q = '';
    this.handleSearch();
  }
  // '/mahan-kosh/view'
  goTomahanView(alpha) {
    localStorage.setItem('mahan_kosh_alpha', alpha);
    this.router.navigate(['/mahan-kosh/view']);
  }

  handleSearchChange() {
    this.handleSearch();
  }

  onSearchChange(){
  }


  handleSearch() {
    this.searchService.get_resources_words(this.q, this.table_name).subscribe(res=>{
      if(res.status === false) {
        return;
      }
      this.show_autoset = true;
      this.allWords = res;
    })
  }

  hideAutoset(e: Event){
    this.show_autoset = false;
  }

  onKey(evt: any) {
    KeyPress(evt);
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }

  do_search() {
    let val = document.forms['myForm'].outText.value;
    localStorage.setItem('mahan_kosh_alpha', val);
    this.router.navigate(['/mahan-kosh/view']);
  }

  onKeyPush() {
    this.q = this.searchText.nativeElement.value;
    this.handleSearch();
  }

}
