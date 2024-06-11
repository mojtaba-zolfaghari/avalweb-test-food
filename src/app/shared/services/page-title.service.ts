import { Directive, Inject, Injectable, Input, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

/**
 * Service responsible for setting the title that appears above pages.
 */
@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  _title = '';
  _originalTitle = 'AvalWeb';

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
    if (title) {
      title = `${title} | AvalWeb`;
    } else {
      title = this._originalTitle;
    }
    this.bodyTitle.setTitle(title);
  }

  constructor(private bodyTitle: Title) { }
}

/**
 * Directive responsible for setting the title that appears above pages.
 */
@Directive()
export class PageTitleBase implements OnInit {
  @Input() title = '';

  pageTitleService = inject(PageTitleService);

  ngOnInit(): void {
    this.pageTitleService.title = this.title;
  }
}

// --------------------------------

@Injectable({ providedIn: 'root' })
export class TemplatePageTitleStrategy extends TitleStrategy {
  private readonly title = Inject(Title);;

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    
    if (title !== undefined) {
      this.title.setTitle(`AvalWeb | ${title}`);
    }
  }
}
