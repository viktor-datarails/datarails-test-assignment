import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ISideNavItem } from '@core/models/SideNavItem';

@Component({
  selector: 'dr-sidenav',
  templateUrl: './dr-sidenav.component.html',
  styleUrls: ['./dr-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrSidenavComponent {
  public readonly items: ISideNavItem[] = [
    {
      name: 'Users',
      url: '/users',
    }, {
      name: 'Tables',
      url: '/tables',
    }
  ]
}
