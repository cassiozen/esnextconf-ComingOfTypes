/* #region Button Type */
type ButtonProps =
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
function Button({ color, icon, text }: ButtonProps) {
  return 'button';
}

<Button color="#ff0000" icon="info" text="Click Me" />;
