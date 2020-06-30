import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'gitcode-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @HostBinding('class') public hostClass = 'button';

  @Input() public color: 'primary' | 'outline' | 'outline-gray' | 'gray' | 'github' = 'primary';
  @Input() public size: 'small' | 'medium' | 'large' = 'medium';
  @Input() public icon: string;
  @Input() public type: 'button' | 'reset' | 'submit' = 'button';
  @Input() public align: 'horizontal' | 'vertical' = 'horizontal';
  @Input() public direction: 'default' | 'reverse' = 'default';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon('github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/github.svg'));
  }

  public ngOnInit(): void {}

  public ngOnChanges(changes: SimpleChanges): void {}

  public ngOnDestroy(): void {}

  public ngAfterViewInit(): void {}
}
