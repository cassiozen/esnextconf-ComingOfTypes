/* #region Button Type */
type ButtonProperties =
  | {
      color?: string;
      icon?: string;
      text: string;
    }
  | {
      color: string;
      icon: string;
      text?: string;
    };
/* #endregion */
function button({ color, icon, text }: ButtonProperties) {
  return 'button';
}

button({ color: '#ff0000', icon: 'info', text: 'Click Me' });
