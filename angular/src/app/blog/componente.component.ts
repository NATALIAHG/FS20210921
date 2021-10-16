import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { blogViewModelService } from './servicios.service';

@Component({
  selector: 'app-blog',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class blogComponent implements OnInit {
  constructor(protected vm: blogViewModelService) {}
  public get VM(): blogViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}


@Component({
  selector: 'app-blog-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class blogListComponent implements OnInit {
  constructor(protected vm: blogViewModelService) {}
  public get VM(): blogViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class blogAddComponent implements OnInit {
  constructor(protected vm: blogViewModelService) {}
  public get VM(): blogViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class blogEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: blogViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): blogViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

@Component({
  selector: 'app-blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss'],
})
export class blogViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: blogViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): blogViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const blog_COMPONENTES = [
  blogComponent,
  blogListComponent,
  blogAddComponent,
  blogEditComponent,
  blogViewComponent,
];
