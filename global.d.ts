type item = {
  AutoID: number;
  title: string;
  sellPrice: number;
  markerPrice: number;
};
type OrderItem = Omit<item, 'markerPrice'>;
