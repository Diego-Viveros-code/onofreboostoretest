export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}
export const NavigationItems: NavigationItem[] = [
  {
    id: 'naviga',
    title: 'Navegación',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'inicio',
        title: 'Mi carrito',
        type: 'item',
        url: '/cart-page',
        icon: 'feather icon-shopping-cart',
        classes: 'nav-item'
      },
      {
        id: 'order',
        title: 'Mis pedidos',
        type: 'item',
        url: '/order-page',
        icon: 'feather icon-check-square',
        classes: 'nav-item'
      },

      {
        id: 'home',
        title: 'Seguir comprando',
        type: 'item',
        url: '/home',
        classes: 'nav-item',
        icon: 'feather icon-box'
      },
    ]
  }
];


