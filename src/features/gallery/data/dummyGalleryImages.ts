/** Grid column span (of 12) — controls relative width like Pinterest tiles. */
export type DummyGalleryImage = {
  id: string;
  src: string;
  alt?: string;
  /** Number of columns (1–12) this tile spans at `md` and up; mobile is always full width. */
  colSpan: number;
};

/** Curated agriculture / farming themed placeholders for the gallery masonry. */
export const DUMMY_GALLERY_IMAGES: DummyGalleryImage[] = [
  { id: '1', src: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1200&auto=format&fit=crop&q=80', colSpan: 4, alt: 'People working in a garden' },
  { id: '2', src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Aerial fields and waterways' },
  { id: '3', src: 'https://images.unsplash.com/photo-1625240389223-9597d5d8c6fb?w=800&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Rows of young crops' },
  { id: '4', src: 'https://images.unsplash.com/photo-1416879595882-3373a048fb07?w=1400&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Hands holding fresh produce' },
  { id: '5', src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1000&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Irrigation in a field' },
  { id: '6', src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=700&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Tomatoes on the vine' },
  { id: '7', src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1100&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Rolling green hills' },
  { id: '8', src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&auto=format&fit=crop&q=80', colSpan: 5, alt: 'Greenhouse planting' },
  { id: '9', src: 'https://images.unsplash.com/photo-1560493670018-761f7913cae0?w=1000&auto=format&fit=crop&q=80', colSpan: 12, alt: 'Aerial farmland' },
  { id: '10', src: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Harvest basket' },
  { id: '11', src: 'https://images.unsplash.com/photo-1589923188651-268a976852e6?w=900&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Farmer inspecting soil' },
  { id: '12', src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Cereal crop close-up' },
  { id: '13', src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Dairy cows in pasture' },
  { id: '14', src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1300&auto=format&fit=crop&q=80', colSpan: 7, alt: 'Field workers' },
  { id: '15', src: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&auto=format&fit=crop&q=80', colSpan: 5, alt: 'Vineyard rows' },
  { id: '16', src: 'https://images.unsplash.com/photo-1574943337153-aef9d6d843d9?w=1000&auto=format&fit=crop&q=80', colSpan: 5, alt: 'Fresh leafy greens' },
  { id: '17', src: 'https://images.unsplash.com/photo-1516253593875-bd7dda052fcd?w=1100&auto=format&fit=crop&q=80', colSpan: 7, alt: 'Mountain valley farm' },
  { id: '18', src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&auto=format&fit=crop&q=85', colSpan: 12, alt: 'Wide field panorama' },
  { id: '19', src: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=900&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Orchard path' },
  { id: '20', src: 'https://images.unsplash.com/photo-1574323347422-089a6d6e8296?w=800&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Picking berries' },
  { id: '21', src: 'https://images.unsplash.com/photo-1513877675184-065a86508e73?w=950&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Sunlit crops' },
  { id: '22', src: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=700&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Farm tools' },
  { id: '23', src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1000&auto=format&fit=crop&q=80', colSpan: 5, alt: 'Sustainable farming' },
  { id: '24', src: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&auto=format&fit=crop&q=80', colSpan: 7, alt: 'Vegetable beds' },
  { id: '25', src: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=80', colSpan: 12, alt: 'Market produce' },
  { id: '26', src: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=750&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Grain detail' },
  { id: '27', src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=850&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Seasonal harvest' },
  { id: '28', src: 'https://images.unsplash.com/photo-1589923188651-268a976852e6?w=900&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Soil and roots' },
  { id: '29', src: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=950&auto=format&fit=crop&q=80', colSpan: 6, alt: 'Water and crops' },
  { id: '30', src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1000&auto=format&fit=crop&q=80', colSpan: 8, alt: 'Team in the fields' },
  { id: '31', src: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=80', colSpan: 4, alt: 'Seedlings in trays' },
  { id: '32', src: 'https://images.unsplash.com/photo-1416879595882-3373a048fb07?w=1100&auto=format&fit=crop&q=80', colSpan: 7, alt: 'Fresh vegetables' },
  { id: '33', src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&auto=format&fit=crop&q=80', colSpan: 5, alt: 'Pastoral landscape' },
];
