import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISideNavItem } from '@core/models/SideNavItem';

@Component({
  selector: 'dr-sidenav-item',
  templateUrl: './dr-sidenav-item.component.html',
  styleUrls: ['./dr-sidenav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrSidenavItemComponent {

  @Input() navItem: ISideNavItem;
}
